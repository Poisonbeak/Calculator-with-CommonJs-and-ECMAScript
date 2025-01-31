import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function opInput(){
    console.log(`Choose operation:
    + Sum
    - Subtraction
    * Multiplication
    / Interger Division
    `);
    const operator = prompt();
    if (!['+', '-', '*', '/'].includes(operator)) {
        console.log("Wrong input!");
        process.exit(1);
    }
    
    console.log("First operand: ");
    const operand1 = Number(prompt());
    
    console.log("Second operand: ");
    const operand2 = Number(prompt());
    
    return [operator, operand1, operand2];
}