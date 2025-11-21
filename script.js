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
    if (b != 0) {
        return a / b;
    } else {
        return "You trying to break me?";
    }
};

let firstArg = "";
let secondArg = "";
let operator = "";
// the ans variable will be used to check whether we're working with a previous answer
let ans = false;

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

const display = document.querySelector("#display p");

function pressNumber(number) {
    if (operator) {
        secondArg += btnValues.numbers[number];
        display.textContent = secondArg;
    } else {
        if (ans == true) {
            firstArg = btnValues.numbers[number];
            ans = false;
        } else {
            firstArg += btnValues.numbers[number];
        };
        display.textContent = firstArg;
    };
};

function pressOperator(sign) {
    if (secondArg) {
        let result = operate(firstArg, secondArg, operator);
        firstArg = result;
        ans = true;
        display.textContent = firstArg;
        secondArg = "";
    };
    operator = btnValues.operators[sign];
};

function pressEquals() {
    if (secondArg) {
        let result = operate(firstArg, secondArg, operator);
        firstArg = result;
        ans = true;
        display.textContent = firstArg;
        secondArg = "";
        operator = "";
    }
};

function pressClear() {
    firstArg = "";
    secondArg = "";
    operator = "";
    display.textContent = "0";
};

function pressPoint() {
    if (operator && !secondArg) {
        secondArg = "0.";
        display.textContent = secondArg;
    } else if (operator && secondArg && !secondArg.includes(".")) {
        secondArg += ".";
        display.textContent = secondArg;
    } else {
        if (ans == true || !firstArg) {
            firstArg = "0.";
            ans = false;
        } else if (firstArg && !firstArg.includes(".")) {
            firstArg += ".";
        }
        display.textContent = firstArg;
    };
};

function pressBackspace() {
    if (secondArg) {
        secondArg = secondArg.slice(0, -1);
        display.textContent = secondArg || "0";
    } else if (ans == true) {
        firstArg = "";
        display.textContent = "0";
    } else {
        firstArg = firstArg.slice(0, -1);
        display.textContent = firstArg || "0";
    }
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            pressNumber(button.id);
        } else if (button.classList.contains("operator")) {
            pressOperator(button.id);
        } else if (button.id == "equals") {
            pressEquals();
        } else if (button.id == "clear") {
            pressClear();
        } else if (button.id == "point") {
            pressPoint();
        } else if (button.id == "backspace") {
            pressBackspace();
        };
        display.textContent = +parseFloat(display.textContent).toFixed(14 - (display.textContent.split(".")[0]).length);
    });
});