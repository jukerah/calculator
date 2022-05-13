const display = document.getElementById('display');

let valueDisplay = [''];
let count = 0;

const showDisplay = (value) => {
    let text = value;
    display.innerHTML = text.replace(/,/g, '');
}

const handleClick = (value) => {
    valueDisplay[count] = value;
    count += 1;
    showDisplay(valueDisplay.toString());
}

const cleanDisplay = () => {
    count = 0;
    valueDisplay.splice(0, valueDisplay.length);
    display.innerHTML = '0';
}

const calculate = () => {
    let result = parseFloat(valueDisplay);
    console.log(result);

    showDisplay(result);
}