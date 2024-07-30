#!/usr/bin/node

const fs = require('fs');
const path = require('path');

function readFileContent(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }
        console.log(`${data}`);
    });
}

if (process.argv.length < 3) {
    console.error('Usage: node read.js <filename>');
    process.exit(1);
}

const filename = process.argv[2];

const filePath = path.resolve(filename);

readFileContent(filePath);

