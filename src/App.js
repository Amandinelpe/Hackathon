import React from "react";
import Home from "./components/Home/Home";
import Transport from "./components/Transport/Transport";
import "./App.css";
import data from "./utils/data.js";
import ArticleVoyage from "./components/ArticleVoyage/ArticleVoyage";

const App = () => {
  return (
    <>
      <Home />
      {data.articlesVoyage.map((article, index) => {
        return (
          <ArticleVoyage
            key={index}
            title={article.title}
            description={article.description}
            activities={article.activities}
            media={article.media}
          />
        );
      })}

      <Transport />
    </>
  );
};

export default App;
