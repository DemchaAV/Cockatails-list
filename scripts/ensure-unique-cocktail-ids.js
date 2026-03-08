const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const categoriesDir = path.join(__dirname, '..', 'data', 'categories');
const shouldFix = process.argv.includes('--fix');

function loadCategoryFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.js'))
    .sort();
}

function readCocktails(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const captured = [];
  const sourceCategory = path.basename(filePath, '.js');

  const sandbox = {
    window: {
      registerCocktails(category, cocktails) {
        captured.push({ category, cocktails });
      }
    },
    console
  };

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: filePath });

  return captured.flatMap(({ category, cocktails }) =>
    cocktails.map((cocktail, index) => ({
      id: String(cocktail.id || ''),
      name: String(cocktail.name || ''),
      category: String(cocktail.category || category || ''),
      sourceCategory,
      filePath,
      index
    }))
  );
}

function parseObjects(source) {
  const records = [];
  const stack = [];
  let i = 0;

  while (i < source.length) {
    const ch = source[i];

    if (ch === '"') {
      const stringInfo = readString(source, i);
      const key = stringInfo.value;
      let cursor = skipWhitespace(source, stringInfo.end + 1);

      if (source[cursor] === ':') {
        cursor = skipWhitespace(source, cursor + 1);
        const current = stack[stack.length - 1];

        if (current && source[cursor] === '"') {
          const valueInfo = readString(source, cursor);
          if (key === 'id') {
            current.id = valueInfo.value;
            current.idRange = [cursor + 1, valueInfo.end];
          } else if (key === 'name') {
            current.name = valueInfo.value;
          } else if (key === 'category') {
            current.category = valueInfo.value;
          }
          i = valueInfo.end + 1;
          continue;
        }
      }

      i = stringInfo.end + 1;
      continue;
    }

    if (ch === '{') {
      stack.push({ start: i });
      i += 1;
      continue;
    }

    if (ch === '}') {
      const current = stack.pop();
      if (current && current.id && current.name && current.category && current.idRange) {
        records.push(current);
      }
      i += 1;
      continue;
    }

    i += 1;
  }

  return records;
}

function readString(source, start) {
  let i = start + 1;
  let value = '';

  while (i < source.length) {
    const ch = source[i];

    if (ch === '\\') {
      value += ch;
      if (i + 1 < source.length) {
        value += source[i + 1];
        i += 2;
        continue;
      }
    }

    if (ch === '"') {
      return { value, end: i };
    }

    value += ch;
    i += 1;
  }

  throw new Error(`Unterminated string starting at index ${start}`);
}

function skipWhitespace(source, start) {
  let i = start;
  while (i < source.length && /\s/.test(source[i])) {
    i += 1;
  }
  return i;
}

function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function buildStableSuffix(cocktail) {
  return crypto
    .createHash('sha1')
    .update(`${cocktail.sourceCategory}|${cocktail.category}|${cocktail.name}|${cocktail.index}`)
    .digest('hex')
    .slice(0, 6);
}

function buildDesiredId(cocktail) {
  const base = slugify(cocktail.name) || 'cocktail';
  return `${base}-${buildStableSuffix(cocktail)}`;
}

function buildFixPlan(cocktails) {
  const seenIds = new Set();

  return cocktails.map((cocktail) => {
    let nextId = buildDesiredId(cocktail);
    let counter = 2;

    while (seenIds.has(nextId)) {
      nextId = `${buildDesiredId(cocktail)}-${counter}`;
      counter += 1;
    }

    seenIds.add(nextId);

    return {
      ...cocktail,
      nextId
    };
  });
}

function applyFixes(fixes) {
  const fixesByFile = new Map();

  for (const fix of fixes) {
    if (!fixesByFile.has(fix.filePath)) {
      fixesByFile.set(fix.filePath, []);
    }
    fixesByFile.get(fix.filePath).push(fix);
  }

  for (const [filePath, fileFixes] of fixesByFile.entries()) {
    let source = fs.readFileSync(filePath, 'utf8');
    const objects = parseObjects(source);
    const replacements = [];

    for (const fix of fileFixes) {
      const matches = objects.filter(
        (record) =>
          record.id === fix.id &&
          record.name === fix.name &&
          record.category === fix.category
      );

      if (matches.length === 0) {
        throw new Error(`Could not find source object for ${fix.category}/${fix.name} in ${filePath}`);
      }

      for (const match of matches) {
        replacements.push({
          start: match.idRange[0],
          end: match.idRange[1],
          value: fix.nextId
        });
      }
    }

    replacements.sort((a, b) => b.start - a.start);
    for (const replacement of replacements) {
      source =
        source.slice(0, replacement.start) +
        replacement.value +
        source.slice(replacement.end);
    }

    fs.writeFileSync(filePath, source);
  }
}

function printSummary(fixes) {
  const changed = fixes.filter((fix) => fix.id !== fix.nextId);

  if (changed.length === 0) {
    console.log('All cocktail ids already match the normalized unique format.');
    return;
  }

  console.log(`Found ${changed.length} cocktail id(s) to normalize:`);
  for (const fix of changed) {
    console.log(`- ${fix.sourceCategory}: ${fix.name}`);
    console.log(`  ${fix.id} -> ${fix.nextId}`);
  }
}

function verifyUniqueIds(fixes) {
  const ids = new Set();
  for (const fix of fixes) {
    if (ids.has(fix.nextId)) {
      throw new Error(`Duplicate generated id detected: ${fix.nextId}`);
    }
    ids.add(fix.nextId);
  }
}

function main() {
  const files = loadCategoryFiles(categoriesDir);
  const cocktails = files.flatMap((file) => readCocktails(path.join(categoriesDir, file)));
  const fixes = buildFixPlan(cocktails);

  verifyUniqueIds(fixes);
  printSummary(fixes);

  const changed = fixes.filter((fix) => fix.id !== fix.nextId);

  if (!shouldFix) {
    process.exitCode = changed.length > 0 ? 1 : 0;
    return;
  }

  if (changed.length === 0) {
    return;
  }

  applyFixes(changed);
  console.log(`Applied ${changed.length} id normalization(s).`);
}

main();
