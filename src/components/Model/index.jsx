import React, { useState } from "react";
import { BiPlay } from "react-icons/bi";
import "./index.css";

import { RotatingLines } from "react-loader-spinner";

const Model = (props) => {
  const { styles, vidId } = props;
  // console.log(vidId);
  const [isOpen, setIsOpen] = useState(false);

  const [isVimeoLoaded, setisVimeoLoaded] = useState(false);

  window.addEventListener("click", (e) => {
    // console.log(e.target.classList[0]);
    if (e.target.classList[0] === "modal") {
      handleCloseModal();
    }
  });

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setisVimeoLoaded(false);
  };

  return (
    <div className="modal-container">
      <button className="play-btn" style={styles} onClick={handleButtonClick}>
        <BiPlay />
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {!isVimeoLoaded && (
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="50"
                visible={true}
              />
            )}
            <iframe
              title="vimeo-player"
              src={`https://player.vimeo.com/video/${vidId}`}
              width="100%"
              height="100%"
              frameborder="0"
              onLoad={() => setisVimeoLoaded(!isVimeoLoaded)}
            ></iframe>
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
