#!/usr/bin/node

const fs = require('fs');
const path = require('path');

function readFileContent(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading file: ${err}`);
      } else {
        resolve(data);
      }
    });
  });
}

if (process.argv.length !== 3) {
  console.error('Usage: node read.js <filename>');
  process.exit(1);
}

const filename = process.argv[2];
const filePath = path.resolve(filename);

readFileContent(filePath)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
