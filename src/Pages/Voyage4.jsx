import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage4.css";
import Sun from "../assets/Soleil.mp4";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Voyage4 = () => {
  const notify = () =>
    toast.success("Your vehicle will pick you up at home !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div className="page4">
      <img className="logo" src={logo} />
      <div className="planet4">
        <h2> Lava Land </h2>
        <div className="horizontal-border"></div>
        <video src={Sun} autoPlay loop muted />
      </div>
      <div className="texte4">
        <Zoom>
          <h3>Description</h3>
          <p>
            The Sun is the star of the Solar System. In astronomical
            classification, it is a yellow dwarf star. The Sun is part of the
            galaxy called the Milky Way and is located about 8 kpc from the
            galactic center, in the Orion arm. The Sun orbits the galactic
            center in a galactic year of 225 to 250 million years.
          </p>
        </Zoom>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity4">
        <Zoom>
          <h3>Activities</h3>
          <p>
            You already know about AquaLand, come discover Lavaland! A brand new
            amusement park.
          </p>
        </Zoom>
        <button onClick={notify}>Book Now</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Voyage4;
