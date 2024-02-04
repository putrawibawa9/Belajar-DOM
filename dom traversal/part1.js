closeButton = document.querySelectorAll(".close");

for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener("click", function () {
    alert([i]);
  });
}
