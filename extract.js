const fs = require('fs');
const js = fs.readFileSync('assets/index-CB6QmzBo.js', 'utf8');

console.log("URLs:");
console.log([...new Set(js.match(/https:\/\/[^\"]+/g))]);

console.log("\nPlano Básico Context:");
const pbIdx = js.indexOf('Plano Básico');
console.log(js.substring(pbIdx, pbIdx + 1000));

console.log("\nPlano Premium Context:");
const ppIdx = js.indexOf('Plano Premium');
console.log(js.substring(ppIdx - 200, ppIdx + 1500));

console.log("\nPop-up Context (search for modal or 19,50 or similar):");
const puIdx = js.indexOf('Quero o Plano Básico');
console.log(js.substring(puIdx - 500, puIdx + 1500));
