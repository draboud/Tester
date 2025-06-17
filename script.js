const vidWrapper = document.querySelector(".vid-wrapper");
const locationVid = document.getElementById("locationVid");
const rotationVid = document.getElementById("rotationVid");
const scaleVid = document.getElementById("scaleVid");
const allVids = document.querySelectorAll(".vid");
const locationBtn = document.querySelector(".action-btn.location");
const rotationBtn = document.querySelector(".action-btn.rotation");
const scaleBtn = document.querySelector(".action-btn.scale");

let activeVideo;
let isPlaying = false;

vidWrapper.addEventListener("click", function () {
  PausePlayVid();
});

locationBtn.addEventListener("click", function () {
  SetActiveVid(locationVid);
});
rotationBtn.addEventListener("click", function () {
  SetActiveVid(rotationVid);
});
scaleBtn.addEventListener("click", function () {
  SetActiveVid(scaleVid);
});

const SetActiveVid = function (activeVid) {
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

const PausePlayVid = function () {
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
