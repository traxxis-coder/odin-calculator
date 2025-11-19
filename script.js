const btnValues = {
    "numbers": {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
        "zero": "0"
    },
    "operators": {
        "add": "+",
        "subtract": "-",
        "divide": "/",
        "multiply": "*"
    }
}

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
        if (button.classList.contains("number")) {
            if (operator) {
                secondArg += btnValues.numbers[button.id];
                display.textContent = secondArg;
            } else {
                firstArg += btnValues.numbers[button.id];
                display.textContent = firstArg;
            };
        } else if (button.classList.contains("operator")) {
            if (secondArg) {
                let result = operate(firstArg, secondArg, operator);
                firstArg = result;
                display.textContent = firstArg;
                secondArg = "";
            }
            operator = btnValues.operators[button.id];
        } else if (button.id == "equals") {
            if (secondArg) {
                let result = operate(firstArg, secondArg, operator);
                firstArg = result;
                display.textContent = firstArg;
                secondArg = "";
                operator = "";
            }
        } else if(button.id == "clear") {
            firstArg = "";
            secondArg = "";
            operator = "";
            display.textContent = "0";
        };
    });
});