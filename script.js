function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstArg = "";
let secondArg = "";
let operator = "";

function operate(a, b, sign) {
    switch (sign) {
        case "+":
            return add(+a, +b);
        case "-":
            return subtract(+a, +b);
        case "*":
            return multiply(+a, +b);
        case "/":
            return divide(+a, +b);
    };       
};

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display p");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "one":
                if (operator) {
                    secondArg += "1";
                    display.textContent = secondArg;
                } else {
                    firstArg += "1";
                    display.textContent = firstArg;
                };
                break;
            case "two":
                if (operator) {
                    secondArg += "2";
                    display.textContent = secondArg;
                } else {
                    firstArg += "2";
                    display.textContent = firstArg;
                };                break;
            case "three":
                if (operator) {
                    secondArg += "3";
                    display.textContent = secondArg;
                } else {
                    firstArg += "3";
                    display.textContent = firstArg;
                };
                break;
            case "four":
                if (operator) {
                    secondArg += "4";
                    display.textContent = secondArg;
                } else {
                    firstArg += "4";
                    display.textContent = firstArg;
                };
                break;
            case "five":
                if (operator) {
                    secondArg += "5";
                    display.textContent = secondArg;
                } else {
                    firstArg += "5";
                    display.textContent = firstArg;
                };
                break;
            case "six":
                if (operator) {
                    secondArg += "6";
                    display.textContent = secondArg;
                } else {
                    firstArg += "6";
                    display.textContent = firstArg;
                };
                break;
            case "seven":
                if (operator) {
                    secondArg += "7";
                    display.textContent = secondArg;
                } else {
                    firstArg += "7";
                    display.textContent = firstArg;
                };
                break;
            case "eight":
                if (operator) {
                    secondArg += "8";
                    display.textContent = secondArg;
                } else {
                    firstArg += "8";
                    display.textContent = firstArg;
                };
                break;
            case "nine":
                if (operator) {
                    secondArg += "9";
                    display.textContent = secondArg;
                } else {
                    firstArg += "9";
                    display.textContent = firstArg;
                };
                break;
            case "zero":
                if (operator && secondArg != "") {
                    secondArg += "0";
                    display.textContent = secondArg;
                } else if (firstArg != ""){
                    firstArg += "0";
                    display.textContent = firstArg;
                };
                break;
            case "add":
                if (secondArg) {
                    let result = operate(firstArg, secondArg, operator);
                    firstArg = result;
                    display.textContent = firstArg;
                    secondArg = "";
                }
                operator = "+";
                break;
            case "subtract":
                if (secondArg) {
                    let result = operate(firstArg, secondArg, operator);
                    firstArg = result;
                    display.textContent = firstArg;
                    secondArg = "";
                }
                operator = "-";
                break;
            case "multiply":
                if (secondArg) {
                    let result = operate(firstArg, secondArg, operator);
                    firstArg = result;
                    display.textContent = firstArg;
                    secondArg = "";
                }
                operator = "*";
                break;
            case "divide":
                if (secondArg) {
                    let result = operate(firstArg, secondArg, operator);
                    firstArg = result;
                    display.textContent = firstArg;
                    secondArg = "";
                }
                operator = "/";
                break;
            case "equals":
                if (secondArg) {
                    let result = operate(firstArg, secondArg, operator);
                    firstArg = result;
                    display.textContent = firstArg;
                    secondArg = "";
                    operator = "";
                }
                break;
            case "clear":
                firstArg = "";
                secondArg = "";
                operator = "";
                display.textContent = "0";
        }
    })
})