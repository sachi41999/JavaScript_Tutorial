let lighton = document.querySelector(".leftBotDiv");

lighton.addEventListener("click", () => {
  document.getElementById("mylight").src = "./light_on.png";
});

let lightof = document.querySelector(".rightBotDiv");

lightof.addEventListener("click", () => {
  document.getElementById("mylight").src = "./light_off_1.png";
});
