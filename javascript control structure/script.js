// If-Else statement example
function checkNumber() {
    const number = parseFloat(document.getElementById('number').value);

    if (isNaN(number)) {
        document.getElementById('ifElseResult').innerText = 'Please enter a valid number.';
        return;
    }

    if (number > 0) {
        document.getElementById('ifElseResult').innerText = `${number} is positive.`;
    } else if (number < 0) {
        document.getElementById('ifElseResult').innerText = `${number} is negative.`;
    } else {
        document.getElementById('ifElseResult').innerText = `${number} is zero.`;
    }
}

// For loop example
function countWithForLoop() {
    const countTo = parseInt(document.getElementById('countTo').value);

    if (isNaN(countTo) || countTo < 1) {
        document.getElementById('forLoopResult').innerText = 'Please enter a valid positive number.';
        return;
    }

    let result = '';
    for (let i = 1; i <= countTo; i++) {
        result += i + ' ';
    }

    document.getElementById('forLoopResult').innerText = result.trim();
}

// While loop example
function countWithWhileLoop() {
    const countTo = parseInt(document.getElementById('whileCountTo').value);

    if (isNaN(countTo) || countTo < 1) {
        document.getElementById('whileLoopResult').innerText = 'Please enter a valid positive number.';
        return;
    }

    let result = '';
    let i = 1;
    while (i <= countTo) {
        result += i + ' ';
        i++;
    }

    document.getElementById('whileLoopResult').innerText = result.trim();
}
