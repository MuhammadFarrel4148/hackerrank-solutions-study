'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    let currently = 215;

    if(year === 1984) {
        return '12.09.1984'

    } else if(year < 1984) {
        year % 4 === 0 ? currently += 29 : currently += 28;

    } else {
        if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            currently += 29;

        } else {
            currently += 28
        };
    };

    let resultday = 256 - currently
    let result = `${resultday}.09.${year}`

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
