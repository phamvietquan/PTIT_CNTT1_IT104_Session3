"use strict";
const add2 = (a, b) => a + b;
const subtract2 = (a, b) => a - b;
const multiply2 = (a, b) => a * b;
const divide2 = (a, b) => a / b;
const power = (base, exponent) => Math.pow(base, exponent);
const sqrt = (base, root) => Math.pow(base, 1 / root);
const fibonaci = (n) => {
    if (n < 0 || !Number.isInteger(n))
        return NaN;
    let relust = 1;
    for (let i = 2; i <= n; i++) {
        relust *= i;
    }
    return relust;
};
function calculate(operator) {
    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;
    const resultElement = document.getElementById("result");
    const num1 = Number(input1);
    const num2 = Number(input2);
    if ((input1 !== "" && isNaN(num1)) || (input2 !== "" && isNaN(num2))) {
        resultElement.textContent = "Lỗi: Vui lòng nhập số hợp lệ.";
        return;
    }
    let result;
    switch (operator) {
        case "+":
            result = add2(num1, num2);
            break;
        case "-":
            result = subtract2(num1, num2);
            break;
        case "*":
            result = multiply2(num1, num2);
            break;
        case "/":
            result = num2 === 0 ? "Không thể chia cho 0!" : divide2(num1, num2);
            break;
        case "^":
            result = power(num1, num2);
            break;
        case "√":
            result = sqrt(num1, num2);
            break;
        case "!":
            result = fibonaci(num1);
            break;
        default:
            result = "Phép tính không hợp lệ!";
    }
    resultElement.textContent = `Kết quả: ${result.toString()}`;
}
