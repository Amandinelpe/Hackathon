import React, { useState } from "react";
import "../Styles/Settings.css";
import "../Styles/Transport.css";
import data from "./data.js";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";

const Transport = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(
    data.technologies[0].id
  );
  const [technologyInfo, setTechnologyInfo] = useState(data.technologies[0]);

  const handleNavigation = (navigationId) => {
    setSelectedTechnology(navigationId);
    setTechnologyInfo(data.technologies[navigationId - 1]);
  };

  return (
    <div>
      <img className="logo" src={logo} />
      <div className="page-transport">
        <div className="content">
          <h5 className="title">
            <Zoom>
              <span>05</span> SPACE LAUNCH 101
            </Zoom>
          </h5>
          <div className="transport-navigation">
            <nav>
              <ul className="nav-button-list">
                {data.technologies.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`nav-button ${
                        item.id === selectedTechnology ? "active" : ""
                      }`}
                      onClick={() => handleNavigation(item.id)}
                    >
                      {item.id}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <Zoom>
              <div className="text-container">
                <div className="navigation-item-title">
                  <h3>{technologyInfo.name}</h3>
                </div>
                <div className="navigation-item-description">
                  <p className="body-text">{technologyInfo.description}</p>
                </div>
              </div>
            </Zoom>
            <img
              className="technology-image"
              src={technologyInfo.images.portrait}
              alt="technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
