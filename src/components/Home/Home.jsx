import React from "react";
import Space from "../../assets/Space.mp4";
import "./Home.css";
import MusicIntro from "../../assets/MusicIntro.mp3";

const Home = () => {
  return (
    <>
      <div className="space">
        <video src={Space} autoPlay loop muted />
        <audio className="music" controls src={MusicIntro} />
      </div>
    </>
  );
};

export default Home;
