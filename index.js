"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
// main function 
function main() {
    var firstQuestion = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondQuestion = (0, readline_sync_1.question)('Enter second number:\n');
    var validInput = isNumber(firstQuestion) && isOperator(operator) && isNumber(secondQuestion);
    if (validInput) {
        var firstNumber = parseInt(firstQuestion);
        var secondNumber = parseInt(secondQuestion);
        var result = calculate(firstNumber, operator, secondNumber);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
// function to check number input 
function isNumber(str) {
    var maybeNumber = parseInt(str);
    var isNumber = !isNaN(maybeNumber);
    return isNumber;
}
// function checking operator
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
// calculation function
function calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
    }
}
main();
