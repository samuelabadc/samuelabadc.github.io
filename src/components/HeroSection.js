import React, { useState, useRef } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import videoSrc from '../assets/video/video-2.mp4'; // Ensure this path is correct
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleTrailerButtonClick = () => {
    setShowVideo(true);
  };

  const handleBackButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideo(false);
  };

  return (
    <div className="hero-container">
      {!showVideo && (
        <>
          <h1>INTELECTRONICA</h1>
          <p>Customized solutions</p>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              linkTo="/services"
            >
              GET STARTED
            </Button>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={handleTrailerButtonClick}
            >
              WATCH TRAILER
              <PlayCircleFilledWhiteIcon />
            </Button>
          </div>
        </>
      )}

      {showVideo && (
        <div className="video-container">
          <Button
            className="back-btn"
            onClick={handleBackButtonClick}
          >
            <ArrowBackIcon />
          </Button>
          <video ref={videoRef} src={videoSrc} width="100%" height="auto" controls autoPlay />
        </div>
      )}
    </div>
  );
}

export default HeroSection;
