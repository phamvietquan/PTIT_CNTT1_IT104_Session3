"use strict";
const toNumber = (value) => {
    const num = typeof value === "string" ? Number(value) : value;
    return isNaN(num) ? null : num;
};
const add = (a, b) => {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    return num1 == null || num2 == null ? "tham so khong hp le" : num1 + num2;
};
const subtract = (a, b) => {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    return num1 == null || num2 == null ? "tham so khong hop le" : num1 - num2;
};
const multiply = (a, b) => {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    return num1 == null || num2 == null ? "tham so khong hp le" : num1 * num2;
};
const divide = (a, b) => {
    const num1 = toNumber(a);
    const num2 = toNumber(b);
    return num1 == null || num2 == null || num2 === 0 ? "tham so khong hp le" : num1 / num2;
};
console.log(add("1", 2));
console.log(subtract("10", 3));
console.log(multiply(4, "2"));
console.log(divide("8", 4));
console.log("ac", 12);
