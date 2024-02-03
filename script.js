bChangeColor = document.getElementById("bChangeColor");

bChangeColor.onclick = function () {
  document.body.classList.toggle("bodyGreen");
};

bRandColor = document.createElement("button");
textBtn = document.createTextNode("Random Color");

bRandColor.appendChild(textBtn);

bRandColor.setAttribute("type", "button");

bChangeColor.after(bRandColor);

bRandColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const colorRed = document.querySelector("input[name=colorRed]");
const colorGreen = document.querySelector("input[name=colorGreen]");
const colorBlue = document.querySelector("input[name=colorBlue]");

colorRed.addEventListener("input", function () {
  const b = colorBlue.value;
  const r = colorRed.value;
  const g = colorGreen.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
colorGreen.addEventListener("input", function () {
  const b = colorBlue.value;
  const r = colorRed.value;
  const g = colorGreen.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
colorBlue.addEventListener("input", function () {
  const b = colorBlue.value;
  const r = colorRed.value;
  const g = colorGreen.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
