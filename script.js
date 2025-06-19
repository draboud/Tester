import { Player } from "@lottiefiles/lottie-player";

const myClass = class {
  vidWrapper = document.querySelector(".vid-wrapper");
  percent = document.querySelector(".percentage");
  locationVid = document.getElementById("locationVid");
  rotationVid = document.getElementById("rotationVid");
  scaleVid = document.getElementById("scaleVid");
  rotateBodyVid = document.getElementById("rotateBodyVid");
  rotateBlueVid = document.getElementById("rotateBlueVid");
  rotateRedVid = document.getElementById("rotateRedVid");
  rotateBothVid = document.getElementById("rotateBothVid");
  lottieVid = document.querySelector(".lottie");
  myLottie = document.getElementById("lottie-id");
  allVids = document.querySelectorAll(".vid");
  locationBtn = document.querySelector(".action-btn.location");
  rotationBtn = document.querySelector(".action-btn.rotation");
  scaleBtn = document.querySelector(".action-btn.scale");
  rBodyBtn = document.querySelector(".action-btn.r-body");
  rBlueBtn = document.querySelector(".action-btn.r-blue");
  rRedBtn = document.querySelector(".action-btn.r-red");
  rBothBtn = document.querySelector(".action-btn.r-both");
  lottieBtn = document.querySelector(".action-btn.lottiebtn");

  //lottie...................................................................
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
};
export default myClass;
