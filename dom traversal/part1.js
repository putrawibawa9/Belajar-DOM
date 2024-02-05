closeButton = document.querySelectorAll(".close");

// for (let i = 0; i < closeButton.length; i++) {
//   closeButton[i].addEventListener("click", function (x) {
//     x.target.parentElement.remove();
//   });
// }

closeButton.forEach(function (i) {
  i.addEventListener("click", function (z) {
    z.target.parentElement.style.display = "none";
  });
});

nama = document.querySelector(".nama");

console.log(nama.nextElementSibling);
