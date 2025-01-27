const util = require("./util.js");

function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

function calc(){
    const values = util.opInput(); // opInput() returns user choice in an array: [operator, operand1, operand2]
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

    console.log(`${operand1} ${operator} ${operand2} = ${res}`);
}

module.exports.calc = calc;