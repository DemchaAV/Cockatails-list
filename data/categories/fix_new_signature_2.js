const fs = require('fs');

const filePath = 'c:\\Users\\Demch\\OneDrive\\projects\\Cockatails-list\\data\\categories\\new_signature.js';
let fileContent = fs.readFileSync(filePath, 'utf8');

function fixCocktails(cocktails) {
  return cocktails.map(c => {
    if (c.glassware) { c.glass = c.glassware; delete c.glassware; }
    if (Array.isArray(c.garnish)) { c.garnish = c.garnish.map(g => g.name).join(' & '); }
    if (Array.isArray(c.ingredients)) {
      c.ingredients = c.ingredients.map(ing => {
        let qtyStr = ing.qty;
        if (typeof ing.qty === 'number') {
          const nameLower = ing.name.toLowerCase();
          if (nameLower.includes('bitter') || nameLower.includes('tincture') || nameLower.includes('foamer') || nameLower.includes('solution') || ing.qty <= 3) {
            qtyStr = ing.qty + (ing.qty > 1 ? " dashes" : " dash");
            if (nameLower.includes('solution') || nameLower.includes('foamer')) qtyStr = ing.qty + " pipette";
          } else {
            qtyStr = ing.qty + "ml";
          }
        } else if (ing.qty === null) { qtyStr = "TBD"; }
        return { name: ing.name, qty: qtyStr };
      });
    }
    if (c.totalQty !== undefined) delete c.totalQty;
    const sorted = {};
    const order = ['id', 'name', 'category', 'method', 'glass', 'ice', 'garnish', 'ingredients'];
    order.forEach(k => { if (c[k] !== undefined) sorted[k] = c[k]; });
    Object.keys(c).forEach(k => { if (!order.includes(k)) sorted[k] = c[k]; });
    return sorted;
  });
}

const firstStart = fileContent.indexOf("window.registerCocktails('newSignature', [");
const offset1 = "window.registerCocktails('newSignature', ".length;
const start1 = firstStart + offset1;
const end1 = fileContent.indexOf("\n]);", start1) + 2;

const firstArrStr = fileContent.substring(start1, end1);
const firstArr = eval(firstArrStr);
const fixedFirst = fixCocktails(firstArr);
let newFirstStr = JSON.stringify(fixedFirst, null, 2).replace(/"([^"]+)":/g, '$1:');

const secondStart = fileContent.indexOf("data: [\n", end1);
const offset2 = "data: ".length;
const start2 = secondStart + offset2;
const end2 = fileContent.indexOf("\n] });", start2) + 2;

const secondArrStr = fileContent.substring(start2, end2);
const secondArr = eval(secondArrStr);
const fixedSecond = fixCocktails(secondArr);
let newSecondStr = JSON.stringify(fixedSecond, null, 4).replace(/"([^"]+)":/g, '$1:');

let newFileContent = fileContent.substring(0, start1) + newFirstStr + fileContent.substring(end1, start2) + newSecondStr + fileContent.substring(end2);

fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log("Done");
