import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/'; // type declare

// main function 
function main(): void {
    const firstQuestion: string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondQuestion: string = question('Enter second number:\n');

   const validInput: boolean = isNumber(firstQuestion) && isOperator(operator) && isNumber(secondQuestion);

    if (validInput) {
        const firstNumber: number = parseInt(firstQuestion);
        const secondNumber: number = parseInt(secondQuestion);
        const result = calculate(firstNumber, operator as Operator, secondNumber);
        console.log(result);
    } else {
        console.log('\ninvalid input\n');
        main()
    }

}



// function to check number input 
function isNumber(str: string): boolean {
    const maybeNumber = parseInt(str);
    const isNumber: boolean = !isNaN(maybeNumber);
    return isNumber;
}

// function checking operator
function isOperator(operator: string): boolean {
    switch(operator) {
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
function calculate(firstNumber: number, operator: Operator, secondNumber: number) {
    switch(operator) {
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