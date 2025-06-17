(() => {
  // script.js
  var vidWrapper = document.querySelector(".vid-wrapper");
  var locationVid = document.getElementById("locationVid");
  var rotationVid = document.getElementById("rotationVid");
  var scaleVid = document.getElementById("scaleVid");
  var allVids = document.querySelectorAll(".vid");
  var locationBtn = document.querySelector(".action-btn.location");
  var rotationBtn = document.querySelector(".action-btn.rotation");
  var scaleBtn = document.querySelector(".action-btn.scale");
  var activeVideo;
  var isPlaying = false;
  vidWrapper.addEventListener("click", function() {
    PausePlayVid();
  });
  locationBtn.addEventListener("click", function() {
    SetActiveVid(locationVid);
  });
  rotationBtn.addEventListener("click", function() {
    SetActiveVid(rotationVid);
  });
  scaleBtn.addEventListener("click", function() {
    SetActiveVid(scaleVid);
  });
  var SetActiveVid = function(activeVid) {
    activeVideo = activeVid;
    allVids.forEach((el) => {
      el.pause();
      el.currentTime = 0;
      el.style.display = "none";
      if (el.id === activeVid.id) {
        el.style.display = "block";
      }
      activeVid.play();
      console.log(activeVid.currentTime);
      isPlaying = true;
    });
  };
  var PausePlayVid = function() {
    if (activeVideo) {
      if (isPlaying) {
        activeVideo.pause();
        isPlaying = false;
      } else {
        activeVideo.play();
        isPlaying = true;
      }
    }
  };
})();
