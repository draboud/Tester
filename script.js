const firstBtn = document.querySelector(".action-btn.first");
const secondBtn = document.querySelector(".action-btn.second");
const thirdBtn = document.querySelector(".action-btn.third");
const testBtn = document.querySelector(".action-btn.test");

const vidWrapper = document.querySelector(".vid-wrapper");
const locationVid = document.getElementById("locationVid");
const rotationVid = document.getElementById("rotationVid");
const scaleVid = document.getElementById("scaleVid");
const allVids = document.querySelectorAll(".vid");

//Buttons..................................................................

console.log("test-1");

firstBtn.addEventListener("click", function () {
  SetActiveVid(locationVid);
});
secondBtn.addEventListener("click", function () {
  SetActiveVid(rotationVid);
});
thirdBtn.addEventListener("click", function () {
  SetActiveVid(scaleVid);
});
testBtn.addEventListener("click", function () {
  console.log("test worked!");
  SetVideoToTime(activeVideo);
});
//video control............................................................
let activeVideo;
let isPlaying = false;

vidWrapper.addEventListener("click", function () {
  PausePlayVid();
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
    console.log(activeVideo.currentTime);
  }
};
const SetVideoToTime = function (activeVid) {
  let userTime = prompt("set vid to what time?");
  activeVid.currentTime = userTime;
};
//lottie...................................................................
// };
//slider...................................................................
// const slider = document.getElementById("range");
// const value = document.querySelector(".value");

// value.innerHTML = slider.value;

// slider.addEventListener("input", function () {
//   calcValue();
//   value.textContent = this.value;
// });

// const calcValue = function () {
//   let valuePercent = (slider.value / slider.max) * 100;
//   slider.style.background = `linear-gradient(to right, #8758ff ${valuePercent}%, #ebe9e7 ${valuePercent}%)`;
// };
//calcValue();
