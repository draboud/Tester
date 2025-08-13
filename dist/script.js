(() => {
  // script.js
  var firstBtn = document.querySelector(".action-btn.first");
  var secondBtn = document.querySelector(".action-btn.second");
  var thirdBtn = document.querySelector(".action-btn.third");
  var testBtn = document.querySelector(".action-btn.test");
  var vidWrapper = document.querySelector(".vid-wrapper");
  var locationVid = document.getElementById("locationVid");
  var rotationVid = document.getElementById("rotationVid");
  var scaleVid = document.getElementById("scaleVid");
  var allVids = document.querySelectorAll(".vid");
  console.log("test-1");
  firstBtn.addEventListener("click", function() {
    SetActiveVid(locationVid);
  });
  secondBtn.addEventListener("click", function() {
    SetActiveVid(rotationVid);
  });
  thirdBtn.addEventListener("click", function() {
    SetActiveVid(scaleVid);
  });
  testBtn.addEventListener("click", function() {
    console.log("test worked!");
    SetVideoToTime(activeVideo);
  });
  var activeVideo;
  var isPlaying = false;
  vidWrapper.addEventListener("click", function() {
    PausePlayVid();
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
      console.log(activeVideo.currentTime);
    }
  };
  var SetVideoToTime = function(activeVid) {
    let userTime = prompt("set vid to what time?");
    activeVid.currentTime = userTime;
  };
})();
