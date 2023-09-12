let operatorUsed = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (!operatorUsed) {
            display.value += value;
            operatorUsed = true;
        }
    } else {
        display.value += value;
        operatorUsed = false; 
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    operatorUsed = false; 
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
        operatorUsed = false;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


function backspace() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1); 
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    if (currentValue !== '' && currentValue !== 'Error') {

        if (currentValue.charAt(0) === '-') {
            display.value = currentValue.slice(1);
        } else {
            display.value = '-' + currentValue;
        }
    }
}
