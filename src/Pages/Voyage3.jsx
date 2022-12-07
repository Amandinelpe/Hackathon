import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage3.css";
import Saturne from "../assets/Saturne.mp4";
import logo from "../assets/Logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Voyage3 = () => {
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
    <div className="page3">
      <img className="logo" src={logo} />
      <div className="planet3">
        <h2>Business trip to Saturn</h2>
        <div className="horizontal-border"></div>
        <video src={Saturne} autoPlay loop muted />
      </div>
      <div className="texte3">
          <h3>Description</h3>
          <p>
            Saturn is the sixth planet in the Solar System in order of distance
            from the Sun, and the second largest in size and mass after Jupiter,
            which is like it a gas giant planet. Orbiting on average at about
            1.4 billion kilometers from the Sun{" "}
          </p>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity3">
          <h3>Activities</h3>
          <p>
            Looking for a really cool spot for your team building ? This trip is
            for you. All-inclusive business trip to get the best work-leisure
            balance with your team.
          </p>
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

export default Voyage3;
