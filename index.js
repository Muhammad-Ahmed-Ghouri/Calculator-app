let inputField = document.getElementById("input-field");
const buttons = document.querySelectorAll("button");
const deleteBtn = document.getElementById("DE-btn");
const operators = ["+", "-", "*", "/"];

let finalResult = "";
let buttonsArray = Array.from(buttons);

buttonsArray.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      while (
        inputField.value === "" ||
        operators.includes(
          inputField.value.charAt(inputField.value.length - 1)
        ) ||
        operators.includes(inputField.value.charAt(0)) ||
        inputField.value.charAt(0) === "%"
      ) {
        inputField.value = "";
        finalResult = "";
        return;
      }

      if (finalResult.charAt(finalResult.length - 1) === "%") {
        finalResult = finalResult.slice(0, -1) / 100;
      } else {
        finalResult = eval(finalResult);
      }

      inputField.value = finalResult;
      if (finalResult % 1 !== 0) {
        inputField.value = finalResult.toFixed(2);
      }
    } else if (e.target.innerHTML == "AC") {
      finalResult = "";
      inputField.value = finalResult;
    } else if (e.target.innerHTML == "DE") {
      finalResult = finalResult.slice(0, -1);
      inputField.value = finalResult;
    } else {
      finalResult += e.target.innerHTML;
      inputField.value = finalResult;
    }
  });
});
