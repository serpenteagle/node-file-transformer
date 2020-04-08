#!/usr/bin/env node

const fs = require("fs");

const dir = process.cwd();
const [targetLoc, scriptLoc] = process.argv.slice(2).map((v) => dir + "/" + v);
const args = process.argv.slice(4);

// console.log(targetLoc);
const transformed = require(scriptLoc)(targetLoc);

fs.writeFileSync(targetLoc, transformed);
