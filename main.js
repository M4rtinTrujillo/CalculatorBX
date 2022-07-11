let screen = document.getElementById("input");
const numbers = document.querySelectorAll(".numbers div");

for (const button of numbers) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.dataset.key == "equal") {
      screen.textContent = eval(screen.textContent);
      if (screen.textContent.length > 8) {
        screen.textContent = eval(screen.textContent).toFixed(8);
      }
    } else if (e.target.dataset.key == "clear") {
      screen.textContent = "";
    } else {
      screen.textContent = screen.textContent + e.target.dataset.key;
    }
  });
}
