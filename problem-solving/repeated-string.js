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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here

    // Hitung dalam string asli
    let countMain = (s.match(/a/gi) || []).length;
    
    // Hitung pengulangan string
    let repetitions = Math.floor(n / s.length);

    // Total a pada string asli + pengulangan;
    let totalA = repetitions * countMain;

    // Hitung reminder
    let remainder = n % s.length;
    if(remainder > 0) {
        let strRemainder = s.substring(0, remainder);
        let countRemainder = (strRemainder.match(/a/gi) || []).length;
        totalA += countRemainder;
    };

    return totalA
}   

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
