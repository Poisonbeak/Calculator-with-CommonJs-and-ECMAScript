import PromptSync from "prompt-sync";
const prompt = PromptSync();
import { calc as regFunc } from "./regular_functions.js"
import { calc as expFunc } from "./expression_functions.js"
import { calc as arrowFunc } from "./arrow_functions.js"
import { calc as inlineFunc } from "./inline_functions.js"

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
                regFunc();
                break;
            case '2':
                expFunc();
                break;
            case '3':
                arrowFunc();
                break;
            case '4':
                inlineFunc();
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