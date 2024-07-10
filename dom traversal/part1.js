closeButton = document.querySelectorAll(".close");

// for (let i = 0; i < closeButton.length; i++) {
//   closeButton[i].addEventListener("click", function (x) {
//     x.target.parentElement.remove();
//   });
// }

closeButton.forEach(function (i) {
  i.addEventListener("click", function (z) {
    z.target.parentElement.style.display = "none";
    z.preventDefault();
  });
});

const name = ["indah", "damayanti", "putra", "wibawa"];

name.forEach(function (nama, iterasi) {
  console.log("the " + (iterasi + 1) + " is " + nama);
});
