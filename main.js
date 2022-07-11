let input = document.getElementById("input");
const numbers = document.querySelectorAll(".numbers div");
console.log(numbers);
for (const button of numbers) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    if (e.target.dataset.key == "equal") {
      input.textContent = eval(input.textContent);
      if (input.textContent.length > 8) {
        input.textContent = eval(input.textContent).toFixed(8);
      }
    } else if (e.target.dataset.key == "clear") {
      input.textContent = "";
    } else {
      input.textContent = input.textContent + e.target.dataset.key;
    }
  });
}
