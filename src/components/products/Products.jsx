import React from "react";
import "./Products.css";

const data = [
  {
    url: "https://images.samsung.com/is/image/samsung/assets/us/home/07182024-3/SDSAC-7755-LS49CG954SNXZA-HP-MM-6Tile-DT-448x330.jpg?$448_330_JPG$",
    title: "49 Odyssey OLED G9 Gaming Monitor",
    price: 720,
  },
  {
    url: "https://images.samsung.com/is/image/samsung/assets/us/home/07122024-2/SDSAC-7765_Fold6-6-Tile-DT-448x330.jpg?$448_330_JPG$",
    title: "Galaxy Z Fold6",
    price: 1440,
  },
  {
    url: "https://images.samsung.com/is/image/samsung/assets/us/home/07122024-2/SDSAC-7765_Buds3_Pro-6-Tile-DT-448x330.jpg?$448_330_JPG$",
    title: "Galaxy Buds3 Pro",
    price: 100,
  },
  {
    url: "https://images.samsung.com/is/image/samsung/assets/us/home/07242024/LDY-Combo-Top-Deals-MM-DT.jpg?$448_330_JPG$",
    title: "Bespoke Laundry Combo™All-in-one",
    price: 1100,
  },
  {
    url: "https://images.samsung.com/is/image/samsung/assets/us/home/07122024-2/SDSAC-7765_GW_Ultra-6-Tile-DT-448x330.jpg?$448_330_JPG$",
    title: "Galaxy Watch Ultra",
    price: 350,
  },
  {
    url: "https://images.samsung.com/is/image/samsung/assets/us/home/07122024-2/SDSAC-7765_Flip6-6-Tile-DT-448x330.jpg?$448_330_JPG$",
    title: "Galaxy Z Flip 6",
    price: 650,
  },
];

const Card = () => {
  return (
    <div className="container">
      <div className="card__title">
        <h2>Shop all latest offers and innovations</h2>
        <div className="tabs">
          <a href="#">Top Deals</a>
          <a href="#">Mobile</a>
          <a href="#">Tv & Audio</a>
          <a href="#">Home Appliances</a>
          <a href="#">Computing</a>
        </div>
      </div>
      <div className="card__wrapper">
        {data.map((e, idx) => {
          return (
            <div key={idx} className="card">
              <img src={e.url} alt="Product" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{e.title}</h3>
              </div>
              <p className="card-description">Save up to {e.price} $</p>
              <button className="buy-now-button">Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
