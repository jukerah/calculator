const displayNumOld = document.getElementById('display-num-old');
const displayOperator = document.getElementById('display-operator');
const displayNumCurrent = document.getElementById('display-num-current');

let valueDisplay = '';
let keyPress = '';
let numA = 0;
let numB = 0;
let operator = '';
let result = 0;

const sum = (numA, numB) => {
    result += numA + numB;
    numA = result;
    console.log('result: '+result);
}

const subtraction = (numA, numB) => {
    result += numA - numB;
    numA = result;
    console.log('result: '+result);
}

const multiplication = (numA, numB) => {
    result += numA * numB;
    numA = result;
    console.log('result: '+result);
}

const division = (numA, numB) => {
    result += numA / numB;
    numA = result;
    console.log('result: '+result);
}

const showDisplay = (value) => {
    displayNumCurrent.innerHTML = '';
    displayNumCurrent.innerHTML = value.toString();
}

const handleClick = (keyPress) => {
    valueDisplay += keyPress;
    showDisplay(valueDisplay);

    switch (keyPress) {
        case '+':
            operator = keyPress;
            displayNumOld.innerHTML = numA.toString();
            break;
        case '-':
            operator = keyPress;
            displayNumOld.innerHTML = numA.toString();
            displayOperator.innerHTML = operator;
            break;
        case '*':
            operator = keyPress;
            displayNumOld.innerHTML = numA.toString();
            break;
        case '/':
            operator = keyPress;
            displayNumOld.innerHTML = numA.toString();
            break;  
    }

    if (numA === 0 && operator !== '') {
        numA = parseFloat(valueDisplay);
        console.log('numA: '+numA);
        valueDisplay = '';
        showDisplay('');  
        switch (keyPress) {
            case '+':
            case '-':
                operator = keyPress;
                displayNumOld.innerHTML = numA.toString();
                break;
            case '*':
            case '/':
                operator = keyPress;
                break;
        }  
    }
    if (numA !== 0 && valueDisplay !== '') {
        numB = parseFloat(valueDisplay);
        console.log('numB: '+numB);


        



        switch (operator) {
            case '+':
                console.log('chama soma');
                sum(numA, numB);
                break;
            case '-':
                console.log('chama sub');
                subtraction(numA, numB);
                break;
            case '*':
                console.log('chama mult');
                division(numA, numB);
                break;
            case '/':
                console.log('chama div');
                division(numA, numB);
                break;
        }
        valueDisplay = '';
        showDisplay('');          
    }
}


const cleanDisplay = () => {
    console.log('limpa');
    valueDisplay = '';
    displayNumCurrent.innerHTML = '';
    numA = 0;
    numB = 0;
}

const calculate = () => {
    if (result !== 0) {
        showDisplay(result);
    }
}