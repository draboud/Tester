const vidWrapper = document.querySelector(".vid-wrapper");
const percent = document.querySelector(".percentage");
const locationVid = document.getElementById("locationVid");
const rotationVid = document.getElementById("rotationVid");
const scaleVid = document.getElementById("scaleVid");
const rotateBodyVid = document.getElementById("rotateBodyVid");
const rotateBlueVid = document.getElementById("rotateBlueVid");
const rotateRedVid = document.getElementById("rotateRedVid");
const rotateBothVid = document.getElementById("rotateBothVid");
const lottieVid = document.querySelector(".lottie");
const myLottie = document.getElementById("lottie-id");
const allVids = document.querySelectorAll(".vid");
const locationBtn = document.querySelector(".action-btn.location");
const rotationBtn = document.querySelector(".action-btn.rotation");
const scaleBtn = document.querySelector(".action-btn.scale");
const rBodyBtn = document.querySelector(".action-btn.r-body");
const rBlueBtn = document.querySelector(".action-btn.r-blue");
const rRedBtn = document.querySelector(".action-btn.r-red");
const rBothBtn = document.querySelector(".action-btn.r-both");
const lottieBtn = document.querySelector(".action-btn.lottiebtn");

//lottie...................................................................
console.log(myLottie);

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

//video control............................................................
// let activeVideo;
// let isPlaying = false;

// vidWrapper.addEventListener("click", function () {
//   PausePlayVid();
// });

// locationBtn.addEventListener("click", function () {
//   SetActiveVid(locationVid);
// });
// rotationBtn.addEventListener("click", function () {
//   SetActiveVid(rotationVid);
// });
// scaleBtn.addEventListener("click", function () {
//   SetActiveVid(scaleVid);
// });
// rBodyBtn.addEventListener("click", function () {
//   SetActiveVid(rotateBodyVid, true);
// });
// rBlueBtn.addEventListener("click", function () {
//   SetActiveVid(rotateBlueVid, true);
// });
// rRedBtn.addEventListener("click", function () {
//   SetActiveVid(rotateRedVid, true);
// });
// rBothBtn.addEventListener("click", function () {
//   SetActiveVid(rotateBothVid, true);
// });
// lottieBtn.addEventListener("click", function () {
//   SetActiveVid(lottieVid, true);
//   lottieVid.classList.remove("hide");
// });

// const SetActiveVid = function (activeVid, isCollection) {
//   activeVideo = activeVid;
//   allVids.forEach((el) => {
//     el.pause();
//     el.currentTime = 0;
//     el.style.display = "none";
//     if (el.id === activeVid.id) {
//       el.style.display = "block";
//     }
//     if (isCollection) {
//       rotateBodyVid.play();
//       rotateBlueVid.play();
//       rotateRedVid.play();
//       rotateBothVid.play();
//     } else {
//       activeVid.play();
//     }
//     isPlaying = true;
//   });
// };

// const PausePlayVid = function () {
//   if (activeVideo && activeVideo != lottieVid) {
//     if (isPlaying) {
//       activeVideo.pause();
//       isPlaying = false;
//       if (
//         Math.round((activeVideo.currentTime / activeVideo.duration) * 100) > 50
//       ) {
//         percent.classList.remove("hide");
//       } else {
//         percent.classList.add("hide");
//       }
//     } else {
//       activeVideo.play();
//       isPlaying = true;
//     }
//   }
//   if (activeVideo === lottieVid) {
//   }
// };
//.........................................................................
