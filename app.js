const toggleButton = document.querySelector(".toggle-btn");
const ball = document.querySelector(".toggle-btn-circle");
const monthlyPrice = document.querySelectorAll(".monthly-price");
const annualPrice = document.querySelectorAll(".annual-price");

let toggled = false;

toggleButton.addEventListener("click", () => {
  if (!toggled) {
    /* REMOVES BALL-BACKWARD CLASS SET TO IT IN LINE 16 */
    ball.classList.remove("ball-backward");
    ball.classList.add("ball-forward");
    annualPrice.forEach((item) => {
      item.style.display = "flex";
    });
    monthlyPrice.forEach((element) => {
      element.style.display = "none";
    });
    toggled = true;
    return;
  }

  if (toggled) {
    /* ADDS BALL FORAWARD SET ON LINE 10 */
    ball.classList.remove("ball-forward");
    ball.classList.add("ball-backward");
    annualPrice.forEach((item) => {
      item.style.display = "none";
    });
    monthlyPrice.forEach((element) => {
      element.style.display = "flex";
    });
    toggled = false;
    return;
  }
});
