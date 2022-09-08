import React, { useEffect } from "react";
import {
  AiOutlineAudioMuted,
  AiOutlineCloseCircle,
  AiOutlineFullscreen,
  AiOutlinePause,
  AiOutlinePlayCircle,
  AiOutlineReload,
  AiOutlineSound,
} from "react-icons/ai";
import "../css/greet-video.css";
import videoLink from "../assets/video/welcome.mp4"; // Add your mp4 video link link here
import styled from "styled-components";

const GreetWrapper = styled.div`
  transition: all 0.3s;
  transform-origin: bottom right;
  width: 170px;
  height: 170px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  cursor: pointer;
  @media only screen and (max-width: 575px) {
    width: 150px;
    height: 150px;
  }
  @media only screen and (max-width: 450px) {
    width: 135px;
    height: 135px;
  }
  video {
    border-radius: 100%;
    border: 3px solid #7432ff;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .greet_full-close,
  .greet_full-replay,
  .greet_full-play,
  .greet_full-mute,
  .greet_full-volume,
  .greet_full-expand,
  .greet_full-pause {
    display: none;
  }
  &.greet_wrapper-full {
    width: 300px;
    height: 500px;
    cursor: auto;
    @media only screen and (max-width: 575px) {
      width: 250px;
      height: 400px;
    }
    @media only screen and (max-width: 450px) {
      width: 200px;
      height: 350px;
    }
    video {
      border-radius: 10px;
      border: none;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .greet_text,
    .greet_close {
      display: none;
    }
    &.greet_wrapper-resize {
      transform: inherit;
    }
    .greet_full-close,
    .greet_full-replay,
    .greet_full-play,
    .greet_full-mute,
    .greet_full-volume,
    .greet_full-expand,
    .greet_full-pause {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: rgb(22 30 46 / 80%);
      color: #fff;
      transition: all 0.5s;

      margin-bottom: 5px;
      &:hover {
        background-color: #111;
      }
    }
    .greet_full-close {
      position: absolute;
      top: 5px;
      right: 5px;
    }
    .greet_media-action {
      top: 5px;
      left: 5px;
      position: absolute;
    }
  }
  &:hover .greet_close {
    opacity: 1;
  }

  &.greet_wrapper-resize {
    transform: scale(0.67);
  }
  &.greet_left {
    left: 30px !important;
    right: auto;
    transform-origin: bottom left;
  }
`;
const GreetText = styled.h4`
  position: absolute;
  top: 50%;
  z-index: 99;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 25px;
`;
const GreetClose = styled.div`
  position: absolute;
  top: -6px;
  right: 15px;
  opacity: 0;
  transition: 0.3s;
  svg {
    font-size: 25px;
  }
`;
const GreetFullClose = styled.div``;
const GreetFullReplay = styled.div``;
const GreetFullBtn = styled.div``;
const GreetMediaAction = styled.div``;
const GreetFullVolume = styled.div``;
const GreetFullMute = styled.div``;
const GreetFullPause = styled.div``;
const GreetFullPlay = styled.div``;
const GreetFullExpand = styled.div``;

const GreetVideo = () => {
  useEffect(() => {
    let greetWrapper = document.getElementById("greet_wrapper");
    let greetVideo = document.getElementById("greet_video");
    let greetClose = document.getElementById("greet_close");
    let greetFullClose = document.getElementById("greet_full-close");
    let greetFullReplay = document.getElementById("greet_full-replay");
    let greetFullVolume = document.getElementById("greet_full-volume");
    let greetFullMute = document.getElementById("greet_full-mute");
    let greetFullPause = document.getElementById("greet_full-pause");
    let greetFullPlay = document.getElementById("greet_full-play");
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
      greetVideo.muted = false;
    });
    // VOLUME MUTE
    greetFullMute.addEventListener("click", () => {
      greetFullVolume.style.display = "flex";
      greetFullMute.style.display = "none";
      greetVideo.muted = true;
    });

    // Video pause
    greetFullPause.addEventListener("click", () => {
      greetFullPlay.style.display = "flex";
      greetFullPause.style.display = "none";
      greetVideo.pause();
    });
    // Video play
    greetFullPlay.addEventListener("click", () => {
      greetFullPause.style.display = "flex";
      greetFullPlay.style.display = "none";
      greetVideo.play();
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
        greetVideo.muted = false;
      }
      greetWrapper.classList.add("greet_wrapper-full");
      greetFullBtn.style.display = "block";
    };

    if (greetFullPause.classList.contains("greet_full-pause")) {
      greetFullPlay.style.display = "none";
    } else if (greetFullPlay.classList.contains("greet_full-play")) {
      greetFullPause.style.display = "none";
    }
    if (greetFullMute.classList.contains("greet_full-mute")) {
      greetFullVolume.style.display = "none";
    } else if (greetFullVolume.classList.contains("greet_full-volume")) {
      greetFullMute.style.display = "none";
    }

    greetVideo.addEventListener("click", () => {
      videoModal();
    });

    greetText.addEventListener("click", () => {
      videoModal();
    });

    // ON SCROLL SIZE CHANGE
    window.addEventListener("scroll", function (event) {
      let scroll = window.scrollY;
      if (scroll > 1) {
        greetWrapper.classList.add("greet_wrapper-resize");
      } else {
        greetWrapper.classList.remove("greet_wrapper-resize");
      }
    });
  }, []);

  return (
    <GreetWrapper id="greet_wrapper" className="greet_wrapper greet_toggler">
      <video id="greet_video">
        <source type="video/mp4" src={videoLink} />
        {/* <source src="../src/video/welcome.mp4" type="video/webm" />
        <source src="../src/video/welcome.mp4" type="video/ogg" /> */}
      </video>
      <GreetText id="greet_text" className="greet_text">
        Hey 👋
      </GreetText>

      <GreetClose id="greet_close" className="greet_close">
        <AiOutlineCloseCircle />
      </GreetClose>
      <GreetFullBtn id="greet_full-btn">
        <GreetFullClose id="greet_full-close" className="greet_full-close">
          <AiOutlineCloseCircle />
        </GreetFullClose>

        <GreetMediaAction className="greet_media-action">
          <GreetFullReplay id="greet_full-replay" className="greet_full-replay">
            <AiOutlineReload />
          </GreetFullReplay>
          <GreetFullVolume id="greet_full-volume" className="greet_full-volume">
            <AiOutlineSound />
          </GreetFullVolume>
          <GreetFullMute id="greet_full-mute" className="greet_full-mute">
            <AiOutlineAudioMuted />
          </GreetFullMute>

          <GreetFullPause id="greet_full-pause" className="greet_full-pause">
            <AiOutlinePause />
          </GreetFullPause>

          <GreetFullPlay id="greet_full-play" className="greet_full-play">
            <AiOutlinePlayCircle />
          </GreetFullPlay>

          <GreetFullExpand id="greet_full-expand" className="greet_full-expand">
            <AiOutlineFullscreen />
          </GreetFullExpand>
        </GreetMediaAction>
      </GreetFullBtn>
    </GreetWrapper>
  );
};

export default GreetVideo;
