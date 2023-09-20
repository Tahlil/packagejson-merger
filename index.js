const fs = require('fs');
var merge = require('merge-package-json');
var dst = fs.readFileSync('package.a.json');
var src = fs.readFileSync('package.b.json');

// Create a new `package.json`
console.log(merge(dst, src));