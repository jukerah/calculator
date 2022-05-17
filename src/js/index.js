const displayNumOld = document.getElementById('display-num-old');
const displayOperator = document.getElementById('display-operator');
const displayNumCurrent = document.getElementById('display-num-current');

let keyPress = '';
let numA = 0;
let numB = 0;
let operator = '';
let result = 0;

const sum = (numA, numB) => {
    result = numA + numB;
}

const subtraction = (numA, numB) => {
    result = numA - numB;
}

const multiplication = (numA, numB) => {
    result = numA * numB;
}

const division = (numA, numB) => {
    result = numA / numB;
}

const nextCalc = (numA, numB, operator) => {
    switch (operator) {
        case '+':
            sum(numA, numB);
            break;
        case '-':
            subtraction(numA, numB);
            break;
        case '*':
            multiplication(numA, numB);
            break;
        case '/':
            division(numA, numB);
            break;
    }

    displayNumCurrent.innerHTML = result.toString();
}

const showDisplay = (operator) => {
    numA = parseFloat(displayNumCurrent.innerHTML);
    displayOperator.innerHTML = operator;
    displayNumOld.innerHTML = displayNumCurrent.innerHTML;
    displayNumCurrent.innerHTML = '';
}

const handleClick = (keyPress) => {

    switch (keyPress) {
        case '+':
        case '*':
        case '/':
            if (displayNumOld.innerHTML === '' && displayNumCurrent.innerHTML === '' || displayNumOld.innerHTML !== '' && displayNumCurrent.innerHTML === '' && displayOperator.innerHTML !== '') {
                break;
            }
            if (displayNumOld.innerHTML !== '' && displayNumCurrent.innerHTML !== '' || displayOperator.innerHTML !== '') {
                numB = parseFloat(displayNumCurrent.innerHTML);
                nextCalc(numA, numB, operator);
                result = 0;
            }
            operator = keyPress;
            showDisplay(operator);

            break;
        case '-':
            if (displayNumOld.innerHTML === '' && displayNumCurrent.innerHTML === '' && displayOperator.innerHTML === '') {
                displayNumCurrent.innerHTML = keyPress;
                break;
            }
            if (displayNumOld.innerHTML === '' && displayNumCurrent.innerHTML === keyPress && displayOperator.innerHTML === '') {
                break;
            }
            if (displayNumOld.innerHTML === '' && displayNumCurrent.innerHTML === '' || displayNumOld.innerHTML !== '' && displayNumCurrent.innerHTML === '' && displayOperator.innerHTML !== '') {
                break;
            }
            if (displayNumOld.innerHTML !== '' && displayNumCurrent.innerHTML !== '' || displayOperator.innerHTML !== '') {
                numB = parseFloat(displayNumCurrent.innerHTML);
                nextCalc(numA, numB, operator);
                result = 0;
            }
            operator = keyPress;
            showDisplay(operator);

            break;
        default:
            displayNumCurrent.innerHTML += keyPress;
    }
}

const cleanDisplay = () => {
    numA = 0;
    numB = 0;
    result = 0;
    displayNumOld.innerHTML = '';
    displayOperator.innerHTML = '';
    displayNumCurrent.innerHTML = '';
}

const calculate = () => {
    numA = (displayNumOld.innerHTML === '') ? 0 : parseFloat(displayNumOld.innerHTML);
    numB = (displayNumCurrent.innerHTML === '') ? 0 : parseFloat(displayNumCurrent.innerHTML);

    switch (operator) {
        case '+':
            sum(numA, numB);
            break;
        case '-':
            subtraction(numA, numB);
            break;
        case '*':
            multiplication(numA, numB);
            break;
        case '/':
            division(numA, numB);
            break;
    }

    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            numA = 0;
            numB = 0;
            displayNumOld.innerHTML = '';
            displayOperator.innerHTML = '';
            displayNumCurrent.innerHTML = parseFloat(result);
            result = 0;
            break;
    }
}