const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquare() {
    if (display.value !== '') {
        display.value = Math.pow(eval(display.value), 2);
    }
}

function calculateSquareRoot() {
    if (display.value !== '') {
        display.value = Math.sqrt(eval(display.value));
    }
}

function calculateFactorial() {
    if (display.value !== '') {
        let num = parseInt(display.value);
        if (num < 0) {
            display.value = 'Error';
            return;
        }
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        display.value = fact;
    }
}
