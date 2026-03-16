const fs = require('fs');

const filePath = 'c:\\Users\\Demch\\OneDrive\\projects\\Cockatails-list\\data\\categories\\new_signature.js';
let fileContent = fs.readFileSync(filePath, 'utf8');

// The file contains two identical arrays. Let's write a function to fix a list of cocktails
function fixCocktails(cocktails) {
  return cocktails.map(c => {
    // 1. Rename glassware to glass
    if (c.glassware) {
      c.glass = c.glassware;
      delete c.glassware;
    }

    // 2. Fix garnish
    if (Array.isArray(c.garnish)) {
      c.garnish = c.garnish.map(g => g.name).join(' & ');
    }

    // 3. Fix ingredients qty
    if (Array.isArray(c.ingredients)) {
      c.ingredients = c.ingredients.map(ing => {
        let qtyStr = ing.qty;
        if (typeof ing.qty === 'number') {
          const nameLower = ing.name.toLowerCase();
          if (nameLower.includes('bitter') || nameLower.includes('tincture') || nameLower.includes('foamer') || nameLower.includes('solution') || ing.qty <= 3) {
            qtyStr = ing.qty + (ing.qty > 1 ? " dashes" : " dash"); // default approximation
            if (nameLower.includes('solution') || nameLower.includes('foamer')) {
                qtyStr = ing.qty + " pipette";
            }
          } else {
            qtyStr = ing.qty + "ml";
          }
        } else if (ing.qty === null) {
          qtyStr = "TBD";
        }
        return { name: ing.name, qty: qtyStr };
      });
    }

    // remove totalQty if present
    if (c.totalQty !== undefined) {
      delete c.totalQty;
    }
    
    // Sort keys to look similar: id, name, category, method, glass, ice, garnish, ingredients
    const sorted = {};
    const order = ['id', 'name', 'category', 'method', 'glass', 'ice', 'garnish', 'ingredients'];
    order.forEach(k => {
      if (c[k] !== undefined) sorted[k] = c[k];
    });
    // add any remaining keys
    Object.keys(c).forEach(k => {
      if (!order.includes(k)) sorted[k] = c[k];
    });

    return sorted;
  });
}

// Extract the two arrays via regex or just eval the whole structure.
// Since it's a bit tricky to parse the JS programmatically and reconstruct it, 
// let's extract the array strings, evaluate them, format them, and stringify them.

const firstArrayMatch = fileContent.match(/window\.registerCocktails\('newSignature',\s*(\[\s*\{[\s\S]*?\}\s*\])\s*\);/);
const secondArrayMatch = fileContent.match(/data:\s*(\[\s*\{[\s\S]*?\}\s*\])\s*\}\);/);

if (firstArrayMatch && secondArrayMatch) {
  let firstArrayStr = firstArrayMatch[1];
  let secondArrayStr = secondArrayMatch[1];

  let firstArray = eval(firstArrayStr);
  let secondArray = eval(secondArrayStr);

  let fixedFirst = fixCocktails(firstArray);
  let fixedSecond = fixCocktails(secondArray);

  let newFirstStr = JSON.stringify(fixedFirst, null, 2);
  let newSecondStr = JSON.stringify(fixedSecond, null, 4);

  fileContent = fileContent.replace(firstArrayStr, newFirstStr);
  fileContent = fileContent.replace(secondArrayStr, newSecondStr);

  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log("Successfully fixed the cocktail structures.");
} else {
  console.log("Failed to match the arrays in the file.");
}
