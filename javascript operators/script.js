// Perform arithmetic operations
function performArithmetic() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('arithmeticResult').innerText = 'Please enter valid numbers.';
        return;
    }

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;
    const remainder = num1 % num2;
    const power = num1 ** num2;

    document.getElementById('arithmeticResult').innerHTML = `
        ${num1} + ${num2} = ${sum} <br>
        ${num1} - ${num2} =: ${difference} <br>
        ${num1} * ${num2} =: ${product} <br>
        ${num1} / ${num2} =: ${quotient} <br>
        ${num1} % ${num2} =: ${remainder} <br>
        ${num1} ^ ${num2} =: ${power}
    `;
}

// Perform comparison operations
function performComparison() {
    const comp1 = document.getElementById('comp1').value;
    const comp2 = document.getElementById('comp2').value;

    const isEqual = comp1 == comp2;
    const isStrictEqual = comp1 === comp2;
    const isNotEqual = comp1 != comp2;
    const isStrictNotEqual = comp1 !== comp2;
    const isGreater = comp1 > comp2;
    const isGreaterOrEqual = comp1 >= comp2;
    const isLess = comp1 < comp2;
    const isLessOrEqual = comp1 <= comp2;

    document.getElementById('comparisonResult').innerHTML = `
        Equal (==): ${isEqual} <br>
        Strict Equal (===): ${isStrictEqual} <br>
        Not Equal (!=): ${isNotEqual} <br>
        Strict Not Equal (!==): ${isStrictNotEqual} <br>
        Greater Than (>): ${isGreater} <br>
        Greater Than or Equal (>=): ${isGreaterOrEqual} <br>
        Less Than (<): ${isLess} <br>
        Less Than or Equal (<=): ${isLessOrEqual}
    `;
}

// Perform logical operations
function performLogic() {
    const bool1 = document.getElementById('bool1').value.toLowerCase() === 'true';
    const bool2 = document.getElementById('bool2').value.toLowerCase() === 'true';

    const and = bool1 && bool2;
    const or = bool1 || bool2;
    const notBool1 = !bool1;
    const notBool2 = !bool2;

    document.getElementById('logicResult').innerHTML = `
        AND (&&): ${and} <br>
        OR (||): ${or} <br>
        NOT Boolean 1 (!bool1): ${notBool1} <br>
        NOT Boolean 2 (!bool2): ${notBool2}
    `;
}
