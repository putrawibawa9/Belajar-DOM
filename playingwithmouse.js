document.body.addEventListener("mousemove", function(event) {
  const xpos = (event.clientX / window.innerWidth) * 255;
  console.log("xpos");
  alert("eok");
});
document.body.style.backgroundColor = "yellow";
