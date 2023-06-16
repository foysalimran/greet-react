import React from 'react';

const VideoPopup = ({greetOption, btnColorBg, btnColorText, handleVideoClick}) => {

    return (
        <>
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
        </>
    );
};

export default VideoPopup;