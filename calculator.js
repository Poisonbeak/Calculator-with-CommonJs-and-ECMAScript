const prompt = require("prompt-sync")();
const regFunc = require("./regular_functions.js");

function menu(){
    console.log(`Choose function type:
        1. Normal functions
        5. Quit
        `);
    console.log();    
    let choice = prompt();

    switch (choice) {
        case '1':
            regFunc.calc();
            break;
        case '5':
            process.exit(1);
        default:
            break;
    }
}

menu();