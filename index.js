const display = document.getElementById('display')

function appendToDisplay(input) {
    display.value += input;
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

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    const inputValue = display.value;
    if (inputValue) {
        const result = Math.sqrt(parseFloat(inputValue));
        if (!isNaN(result)) {
            display.value = result;
        } else {
            display.value = 'Error';
        }
    }
}
        // Funktion für die Prozentsatz-Berechnung
        function calculatePercentage() {
            const inputValue = display.value;
            
            const parts = inputValue.split('-');
            if (parts.length === 2) {
                const number = parseFloat(parts[0]);
                const percentage = parseFloat(parts[1]);
                if (!isNaN(number) && !isNaN(percentage)) {
                
                    const percentValue = number * (percentage / 100);
                    
                    const result = number - percentValue;
                    display.value = result;
                } else {
                    display.value = 'Error';
                }
            } else if (parts.length === 1) {
                
                const percentage = parseFloat(parts[0]);
                if (!isNaN(percentage)) {
                    display.value = percentage + '%';
                } else {
                    display.value = 'Error';
                }
            } else {
                display.value = 'Error';
            }
        }