//https://upmostly.com/typescript/reading-and-writing-files-with-typescript
import fs from 'fs';


/* const txt:string = fs.readFileSync('./DO/Angular.txt', 'utf-8');
console.log(txt) */

import * as readline from 'readline';
const lineReader = readline.createInterface({
    input: fs.createReadStream('./DO/Typescript.txt'),
    terminal: false,
});

let Num: number = 0
let Out: string = ''
let CSV: string[] = []
lineReader.on('line', (line) => {
    Num++
    let Rem = Num % 4
    switch (Rem) {
        case 0:
            Out = ""
            break;
        case 1:
            Out = line
            break;
        case 2:
            Out = `${Out}#(${line})#`
            break;
        case 3:
            Out = `${Out}${line}\r\n`
            CSV.push(Out)
            break;

    }
    //console.log(Out)
})
lineReader.on('close', function () {
    // All lines are read, file is closed now.
    console.log(CSV
        .sort()
        .join(''))
});

