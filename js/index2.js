document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".button");

  let currentInput = "0";
  let previousInput = "";
  let operator = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (value === "C") {
        currentInput = "0";
        previousInput = "";
        operator = "";
      } else if (value === "=") {
        if (previousInput !== "" && operator !== "") {
          currentInput = calculate(previousInput, currentInput, operator);
          operator = "";
          previousInput = "";
        }
      } else if (["+", "-", "*", "/"].includes(value)) {
        if (operator === "") {
          previousInput = currentInput;
          currentInput = "0";
        }
        operator = value;
      } else {
        if (currentInput === "0") {
          currentInput = value;
        } else {
          currentInput += value;
        }
      }

      updateDisplay();
    });
  });

  function updateDisplay() {
    display.textContent = currentInput;
  }

  function calculate(num1, num2, operator) {
    let result;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "/":
        result = n1 / n2;
        break;
      default:
        return "0";
    }

    return result.toString();
  }
});
