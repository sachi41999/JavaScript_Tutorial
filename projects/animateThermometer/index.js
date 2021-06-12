let ico = document.querySelector(".icon");

const tempload = () => {
  ico.innerHTML = "&#xf2cb";
  ico.style.color = "white";

  setTimeout(() => {
    ico.innerHTML = "&#xf2ca";
    ico.style.color = "yellow";
  }, 1000);

  setTimeout(() => {
    ico.innerHTML = "&#xf2c9";
    ico.style.color = "yellow";
  }, 2000);

  setTimeout(() => {
    ico.innerHTML = "&#xf2c8";
    ico.style.color = "yellow";
  }, 3000);

  setTimeout(() => {
    ico.innerHTML = "&#xf2c7";
    ico.style.color = "red";
  }, 4000);
};

setInterval(tempload, 5000);

tempload();
