document.querySelector(".field").addEventListener("click", function (event) {
  const field = event.currentTarget;
  const ball = document.querySelector(".ball");
  const ballSize = 100;

  const clickX = event.clientX;
  const clickY = event.clientY;

  const minX = ballSize / 2;
  const maxX = field.clientWidth - ballSize / 2;
  const minY = ballSize / 2;
  const maxY = field.clientHeight - ballSize / 2;

  const ballX = Math.max(minX, Math.min(maxX, clickX));
  const ballY = Math.max(minY, Math.min(maxY, clickY));

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;
});
