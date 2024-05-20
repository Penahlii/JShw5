document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  button.addEventListener("click", function () {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
