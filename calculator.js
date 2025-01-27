const prompt = require("prompt-sync")();
const regFunc = require("./regular_functions.js");
const expFunc = require("./expression_functions.js");
const arrowFunc = require("./arrow_functions.js");
const inlineFunc = require("./inline_functions.js")

function menu(){
    while (true) {
        console.log(`Choose function type:
        1. Normal functions
        2. Expression functions
        3. Arrow functions
        4. Inline functions
        5. Quit
        `);
        console.log();    
        let choice = prompt();
    
        switch (choice) {
            case '1':
                regFunc.calc();
                break;
            case '2':
                expFunc.calc();
                break;
            case '3':
                arrowFunc.calc();
                break;
            case '4':
                inlineFunc.calc();
                break;
            case '5':
                process.exit(1);
            default:
                console.log("Choice not recognized.");
                
                break;
        }
    }
}

menu();