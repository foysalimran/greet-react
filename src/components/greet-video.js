import React from "react";
import { useEffect } from "react";
import "../assets/css/greet-video.css";
import videoLink from "../assets/video/welcome.mp4";
import {
  AiOutlineCloseCircle,
  AiOutlineFullscreen,
  AiOutlinePlayCircle,
  AiOutlineReload,
  AiOutlineSound,
  AiOutlineAudioMuted,
} from "react-icons/ai";

const GreetVideo = () => {
  useEffect(() => {
    let greetWrapper = document.getElementById("greet_wrapper");
    let greetVideo = document.getElementById("greet_video");
    let greetClose = document.getElementById("greet_close");
    let greetFullClose = document.getElementById("greet_full-close");
    let greetFullPlay = document.getElementById("greet_full-play");
    let greetFullReplay = document.getElementById("greet_full-replay");
    let greetFullVolume = document.getElementById("greet_full-volume");
    let greetFullMute = document.getElementById("greet_full-mute");
    let greetFullExpand = document.getElementById("greet_full-expand");
    let greetFullBtn = document.getElementById("greet_full-btn");
    let greetText = document.getElementById("greet_text");

    greetVideo.autoplay = true;
    greetVideo.muted = true;
    greetVideo.loop = true;
    greetFullExpand.addEventListener("click", () => {
      greetVideo.requestFullscreen();
    });
    // REPLAY GREET
    greetFullReplay.addEventListener("click", () => {
      greetVideo.currentTime = 0;
    });
    // VOLUME UP
    greetFullVolume.addEventListener("click", () => {
      greetFullMute.style.display = "flex";
      greetFullVolume.style.display = "none";
      greetVideo.muted = true;
    });
    // VOLUME MUTE
    greetFullMute.addEventListener("click", () => {
      greetFullVolume.style.display = "flex";
      greetFullMute.style.display = "none";
      greetVideo.muted = false;
    });
    // VIDEO PLAY
    greetFullPlay.addEventListener("click", () => {
      greetVideo.play();
      greetFullPlay.style.display = "none";
      greetWrapper.classList.toggle("play-video");
    });
    // CLOSE TOTAL GREET
    greetClose.addEventListener("click", () => {
      greetWrapper.style.display = "none";
    });

    // CLOSE FULL GREET
    greetFullClose.addEventListener("click", () => {
      greetWrapper.classList.remove("greet_wrapper-full");
      greetWrapper.classList.remove("play-video");
      greetVideo.muted = true;
      greetVideo.play();
      greetFullBtn.style.display = "none";
    });
    // OPEN FULL GREET
    const videoModal = () => {
      if (!greetWrapper.classList.contains("greet_wrapper-full")) {
        greetVideo.currentTime = 0;
      }
      greetWrapper.classList.add("greet_wrapper-full");
      greetWrapper.classList.toggle("play-video");
      greetVideo.muted = false;

      greetFullMute.style.display = "none";
      greetFullVolume.style.display = "flex";
      if (greetWrapper.classList.contains("play-video")) {
        greetVideo.play();
        greetFullPlay.style.display = "none";
      } else {
        greetVideo.pause();
        greetFullPlay.style.display = "flex";
      }
      greetFullBtn.style.display = "block";
    };

    greetVideo.addEventListener("click", () => {
      videoModal();
    });

    greetText.addEventListener("click", () => {
      videoModal();
    });

    // ON SCROLL SIZE CHANGE
    window.addEventListener("scroll", function (event) {
      let scroll = event.scrollY;
      if (scroll > 1) {
        greetWrapper.classList.add("greet_wrapper-resize");
      } else {
        greetWrapper.classList.remove("greet_wrapper-resize");
      }
    });
  }, []);

  return (
    <div id="greet_wrapper" className="greet_wrapper greet_toggler">
      <video id="greet_video">
        <source type="video/mp4" src={videoLink} />
        {/* <source src="../src/video/welcome.mp4" type="video/webm" />
        <source src="../src/video/welcome.mp4" type="video/ogg" /> */}
      </video>
      <h4 id="greet_text" className="greet_text">
        Hey 👋
      </h4>

      <div id="greet_close" className="greet_close">
        <AiOutlineCloseCircle />
      </div>
      <div id="greet_full-btn">
        <div id="greet_full-close" className="greet_full-close">
          <AiOutlineCloseCircle />
        </div>
        <div id="greet_full-play" className="greet_full-play">
          <AiOutlinePlayCircle />
        </div>
        <div className="greet_media-action">
          <div id="greet_full-replay" className="greet_full-replay">
            <AiOutlineReload />
          </div>
          <div id="greet_full-volume" className="greet_full-volume">
            <AiOutlineSound />
          </div>
          <div id="greet_full-mute" className="greet_full-mute">
            <AiOutlineAudioMuted />
          </div>
          <div id="greet_full-expand" className="greet_full-expand">
            <AiOutlineFullscreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetVideo;
