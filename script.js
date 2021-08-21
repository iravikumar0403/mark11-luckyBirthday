const birthday = document.querySelector("#birthday-input");
const number = document.querySelector("#number");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

button.addEventListener("click", (e) => {
  e.preventDefault();
  checkIfLucky(birthday.value);
});

function checkIfLucky(birthday) {
  let sum = calculateBirtdaySum(birthday)
  if(!(sum && number.value)){
      output.innerHTML = "Please enter valid inputs"
      return false
  }
  if (sum % number === 0) {
    output.innerText = "Congratulations! You're Birthday is lucky!";
  } else {
    output.innerText = "Uh-Oh! You're Birthday not is lucky!";
  }
}

function calculateBirtdaySum(date) {
    let sum = 0;
    date = date.replaceAll("-", "0");
    for (let i = 0; i < date.length; i++) {
        sum += Number(date[i]);
    }
    return sum
}