import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage1.css";
import Jupiter from "../assets/Jupiter.mp4";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Voyage1 = () => {
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
    <div className="page1">
      <img className="logo" src={logo} />
      <div className="planet1">
        <h2>Dinner on Jupiter</h2>
        <div className="horizontal-border"></div>
        <video src={Jupiter} autoPlay loop muted />
      </div>
      <div className="texte1">
        <Zoom>
          <h3>Description</h3>
          <p>
            Jupiter is one of the 4 telluric planets of the Solar System. Colder
            than the Earth, the average temperature on its surface is -67°C. It
            is called the "red planet" because its rocky and desert surface is
            covered with a dust rich in iron oxide of reddish color. There are
            also many high volcanoes and deep canyons.
          </p>
        </Zoom>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity1">
        <Zoom>
          <h3>Activities</h3>
          <p>
            Jupiter: Wanna dazzle your friends with the best view out of town ?
            You found it. Book a private diner on Mars and enjoy the most
            beautiful view of Earth, Venus and Mercury.
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

export default Voyage1;
