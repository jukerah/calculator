const displayNumOld = document.getElementById('display-num-old');
const displayOperator = document.getElementById('display-operator');
const displayNumCurrent = document.getElementById('display-num-current');

let valueDisplay = '';
let keyPress = '';
let numA = 0;
let numB = 0;
let numC = 0;
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

const showDisplay = (value) => {

}

const handleClick = (keyPress) => {

    switch (keyPress) {
        case '+':
            if (displayNumOld.innerHTML === '' && displayNumCurrent.innerHTML === '' && displayOperator.innerHTML) {
                numA = parseFloat(displayNumCurrent.innerHTML);
            }
            if (displayNumOld.innerHTML === '' && displayNumCurrent.innerHTML === '' || displayNumOld.innerHTML !== '' && displayNumCurrent.innerHTML === '' && displayOperator.innerHTML !== '') {
                break;
            } else  {
                numB = parseFloat(displayNumCurrent.innerHTML);
                sum(numA, numB);
                displayNumCurrent.innerHTML = result.toString();
                result = 0;
            }
            
            operator = keyPress;
            numA = parseFloat(displayNumCurrent.innerHTML);
            displayOperator.innerHTML = operator;
            displayNumOld.innerHTML = numA;
            displayNumCurrent.innerHTML = '';

            break;
        case '-':
            if (displayNumOld.innerHTML === '' && displayNumCurrent.innerHTML === '' || displayNumOld.innerHTML !== '' && displayNumCurrent.innerHTML === '' && displayOperator.innerHTML === '-') {
                break;
            } else  {
                numB = parseFloat(displayNumCurrent.innerHTML);
                subtraction(numA, numB);
                displayNumCurrent.innerHTML = result.toString();
                result = 0;
            }
            
            operator = keyPress;
            console.log(numA);
            numA = parseFloat(displayNumCurrent.innerHTML);
            console.log(numA);
            displayOperator.innerHTML = operator;
            displayNumOld.innerHTML = numA;
            displayNumCurrent.innerHTML = '';

            break;
        case '*':
            break;
        case '/':
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
    console.log(numA);
    console.log(numB);

    switch (operator) {
        case '+':
            sum(numA, numB);
            numA = 0;
            numB = 0;
            displayNumOld.innerHTML = '';
            displayOperator.innerHTML = '';
            displayNumCurrent.innerHTML = parseFloat(result);
            result = 0;

            break;
        case '-':
            subtraction(numA, numB);
            numA = 0;
            numB = 0;
            displayNumOld.innerHTML = '';
            displayOperator.innerHTML = '';
            displayNumCurrent.innerHTML = parseFloat(result);
            result = 0;

            break;
        case '*':
            break;
        case '/':
            break;
    }
}