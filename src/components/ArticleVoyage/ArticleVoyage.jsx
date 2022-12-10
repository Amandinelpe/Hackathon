import React from "react";
import "./ArticleVoyage.css";
import logo from "../../assets/Logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ArticleVoyage = (props) => {
  const { title, description, activities, media } = props;

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
    <div className="page">
      <img className="logo" src={logo} alt="logo" />
      <div className="planet">
        <h2>{title}</h2>
        <div className="horizontal-border"></div>
        <video src={media} autoPlay loop muted />
      </div>
      <div className="texte">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className="border"></div>
      <div className="activity">
        <h3>Activities</h3>
        <p>{activities}</p>
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

export default ArticleVoyage;
