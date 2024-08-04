import React from "react";
import "./News.css";

const News = ({ title, subtitle, desc, img, color, btn, bg }) => {
  return (
    <div className="hero">
      <div
        className="hero__img"
        style={{ background: `url(${img}) no-repeat center center / cover` }}
      >
        <div className="hero__title">
          <h2>{title}</h2>
          <div className="tabs">
            {btn.map((tab, index) => (
              <a key={index} href="#">
                {tab}
              </a>
            ))}
          </div>
        </div>
        <div className="hero__desc" style={{ color: color }}>
          <h3>{subtitle}</h3>
          <p style={{ color: color }}>{desc}</p>
          <div className="buttons" style={{ color: color }}>
            <a href="#">Learn More</a>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
