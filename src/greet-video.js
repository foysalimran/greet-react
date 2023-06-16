import React, { useEffect, useState } from "react";
import {
  AiOutlineAudioMuted,
  AiOutlineCloseCircle,
  AiOutlineFullscreen,
  AiOutlinePause,
  AiOutlinePlayCircle,
  AiOutlineReload,
  AiOutlineSound,
} from "react-icons/ai";
import styled from "styled-components";
import VideoPopup from "./video-popup";

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
  * {
    box-sizing: border-box;
  }
  video {
    border-radius: 100%;
    border: 3px solid yellowgreen;
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
  .greet_change-video {
    display: none;
  }
  &.greet_wrapper-full .greet_change-video {
    display: flex;
    gap: 6px;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    width: 100%;
    bottom: 20px;
    transition: 0.3s;
  }
  &.greet_wrapper-full .greet_btn {
    transition: 0.3s;
    display: block;
    padding: 10px 8px;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  &.greet_wrapper-full .greet_btn:hover {
    background-color: #161e2e;
  }
  .greet_email-form {
    position: absolute;
    top: 0;
    left: 0;
    background: #d9d9d9;
    height: 100%;
    display: none;
    padding: 10px;
    border-radius: 5px;
    cursor: auto;
    padding-top: 40px;
  }
  .greet_email-form .greet_form-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #161e2e78;
    border-radius: 50%;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }

  .greet_email-form input,
  .greet_email-form textarea {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: none;
    margin: 0;
    margin-bottom: 8px;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }
  .greet_email-form textarea {
    margin-bottom: 0;
    height: 48%;
  }

  .greet_email-form input:focus,
  .greet_email-form textarea:focus {
    outline: none;
  }

  .greet_email-form.email-form-active {
    display: block;
  }
  .greet_email-form button {
    padding: 10px 16px;
    margin-top: 8px;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    width: 100%;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  .greet_email-form button:focus {
    outline: none;
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
  text-transform: capitalize;
  margin: 0;
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

const GreetVideo = ({
  greetOptions,
  hi,
  border,
  isLeft,
  btnColorBg,
  btnColorText,
  defaultVideo,
  web3formsAccessKey,
}) => {
  let greetFormClose;
  const [currentVideo, setCurrentVideo] = useState(defaultVideo);
  const [success, setSuccess] = useState("Send Email");

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  const emailFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", `${web3formsAccessKey}`);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json();
      if (res.status === 200) {
        setSuccess(data.message);
        setTimeout(() => {
          event.target.reset();
        }, 3000);
      } else {
        setSuccess(data.message);
      }
    } catch (error) {
      setSuccess("Something went wrong!");
    }
    setTimeout(() => {
      setSuccess("Send email");
    }, 5000);
  };

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
    let greetAddFrom = document.querySelector(".greet_add-form");
    let emailForm = document.querySelector(".greet_email-form");

    greetVideo.autoplay = true;
    greetVideo.muted = true;
    greetVideo.loop = true;
    greetFullExpand.addEventListener("click", () => {
      greetVideo.requestFullscreen();
    });

    // Pause video on borwser tab switch
    var frontend_scripts = { pause_on_switch: "1" };
    if (frontend_scripts.pause_on_switch) {
      document.addEventListener("visibilitychange", () => {
        if (
          document["hidden"] ||
          (emailForm && emailForm.classList.contains("email-form-active"))
        ) {
          greetVideo.pause();
        } else {
          greetVideo.play();
          greetFullPlay.style.display = "none";
          greetWrapper.classList.add("play-video");
        }
      });
    }

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
        greetFullPlay.style.display = "none";
        greetFullPause.style.display = "flex";
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

    /* Email form */
    if (greetAddFrom) {
      greetAddFrom.addEventListener("click", () => {
        emailForm.classList.add("email-form-active");
        greetVideo.pause();
      });
    }
    greetFormClose = () => {
      emailForm.classList.remove("email-form-active");
      greetVideo.play();
      greetFullPlay.style.display = "none";
      greetFullPause.style.display = "flex";
    };
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

  const handleButtonClick = () => {
    if (greetFormClose) {
      greetFormClose(); // Call the function
    }
  };

  return (
    <GreetWrapper
      id="greet_wrapper"
      className={`greet_wrapper greet_toggler ${
        isLeft === "yes" ? "greet_left" : ""
      }`}
    >
      <video
        id="greet_video"
        style={{ borderColor: `${border}` }}
        src={currentVideo}
      ></video>
      <GreetText id="greet_text" className="greet_text">
        {hi ? hi : "Hey 👋"}
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
        <div className="greet_change-video">
          {greetOptions.map((greetOption, index) => (
            <div key={index}>
              {greetOption.type === "link" && (
                <a
                  style={{
                    backgroundColor: `${btnColorBg}`,
                    color: `${btnColorText}`,
                  }}
                  className="greet_btn"
                  href={`${greetOption.link}`}
                >
                  {greetOption.laval}
                </a>
              )}
              {greetOption.type === "video" && (
                <button
                  style={{
                    backgroundColor: `${btnColorBg}`,
                    color: `${btnColorText}`,
                  }}
                  className="greet_btn"
                  onClick={() => handleVideoClick(greetOption.link)}
                >
                  {greetOption.laval}
                </button>
              )}
              {greetOption.type === "email_form" && (
                <button
                  className="greet_btn greet_add-form"
                  id="greet_add-form"
                  style={{
                    backgroundColor: `${btnColorBg}`,
                    color: `${btnColorText}`,
                  }}
                >
                  {greetOption.laval}
                </button>
              )}  
            </div>
          ))}
        </div>
      </GreetFullBtn>
      <form
        className="greet_email-form"
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={emailFormSubmit}
      >
        <div className="greet_form-close" onClick={handleButtonClick}>
          <AiOutlineCloseCircle />
        </div>
        <input type="text" name="name" required placeholder="Your name*" />
        <input type="email" name="email" required placeholder="Your email*" />
        <input type="number" name="number" placeholder="Your phone" />
        <textarea
          name="message*"
          required
          placeholder="Your message here.."
        ></textarea>
        <button
          className="greet_email-submit"
          style={{
            backgroundColor: `${btnColorBg}`,
            color: `${btnColorText}`,
          }}
          type="submit"
        >
          {success}
        </button>
      </form>
    </GreetWrapper>
  );
};

export default GreetVideo;
