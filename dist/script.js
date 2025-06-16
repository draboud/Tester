(() => {
  // script.js
  var locationBtn = document.querySelector(".action-btn.location");
  var rotationBtn = document.querySelector(".action-btn.rotation");
  var scaleBtn = document.querySelector(".action-btn.scale");
  locationBtn.addEventListener("click", function() {
    console.log("location!");
  });
  rotationBtn.addEventListener("click", function() {
    console.log("rotation!");
  });
  scaleBtn.addEventListener("click", function() {
    console.log("scale!");
  });
})();
//# sourceMappingURL=script.js.map
