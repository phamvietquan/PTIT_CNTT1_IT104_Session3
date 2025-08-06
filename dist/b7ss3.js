"use strict";
let input = "hello world";
let output = "";
for (let i = 0; i < input.length; i++) {
    if (!output.includes(input[i])) {
        output += input[i];
    }
}
console.log(output);
