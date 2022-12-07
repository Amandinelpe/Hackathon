import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage2.css";
import Moon from "../assets/Lune.mp4";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Voyage2 = () => {
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
    <div className="page2">
      <img className="logo" src={logo} />
      <div className="planet2">
        <h2>Wedding on the Moon</h2>
        <div className="horizontal-border"></div>
        <video src={Moon} autoPlay loop muted />
      </div>
      <div className="texte2">
        <Zoom>
          <h3>Description</h3>
          <p>
            The Moon, or Earth Ib, is the only permanent natural satellite of
            the planet Earth. It is the fifth largest natural satellite in the
            Solar System, and the largest of the planetary satellites relative
            to the size of the planet around which it orbits.
          </p>
        </Zoom>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity2">
        <Zoom>
          <h3>Activities</h3>
          <p>
            Spend your most memorable day on a memorable place. The priest of
            you choice will be waiting for you to start celebrate the marriage.
            A photographer is enclosed in this trip so you will come back down
            to Earth with every memories with you.
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

export default Voyage2;
