import { opInput } from "./util.js"

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

export function calc(){
    const values = opInput(); // opInput() returns user choice in an array: [operator, operand1, operand2]
    const operator = values[0];
    const operand1 = values[1];
    const operand2 = values[2];

    let res = 0;
    switch (operator) {
        case '+':
            res = sum(operand1, operand2);
            break;
        case '-':
            res = sub(operand1, operand2);
            break;
        case '*':
            res = mult(operand1, operand2);
            break;
        case '/':
            res = div(operand1, operand2);
            break;
        default:
            break;
    }

    console.log(`${operand1} ${operator} ${operand2} = ${res}\n`);
}