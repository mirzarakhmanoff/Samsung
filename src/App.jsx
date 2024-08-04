import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import News from "./components/news/News";

const buttons = [
  "Galaxy Z Flip6",
  "Galaxy Z Fold6",
  "Galaxy Watch Ultra",
  "Galaxy Buds3 Pro",
  "Galaxy Experience",
];

const button1 = ["Samsung Neo QLED 8k", "TV + Soundbar bundles", "Q990D"];

const button2 = [
  "Bespoke Appliances",
  "Bespoke Refrigerators",
  "Bespoke Laundry",
];
const button3 = [
  "Trade-in Recycling Program",
  "Certified Re-Newed",
  "How to recycle",
];

function App() {
  return (
    <>
      <Header />
      <Products />
      <News
        title={"Mobile & Computing"}
        subtitle={"Galaxy Z Flip6"}
        desc={"Get up to $650 instant trade-in credit"}
        color="#000"
        btn={buttons}
        img={
          "https://images.samsung.com/is/image/samsung/assets/us/2407/homepage/Scom_HP_LOB-Mobile_Card-2_B6-pc.jpg?$1440_810_JPG$"
        }
      />
      <News
        title={"TV & Audio"}
        subtitle={"Discover new depths of detail"}
        desc={
          "Buy an 85” Class Samsung Neo QLED QN800D and take in hyper-realistic picture with Neo Quantum HDR 8K+."
        }
        color="#fff"
        btn={button1}
        img={
          "https://images.samsung.com/is/image/samsung/assets/us/home/07262024/W31_LoB1_D_1440x810-1x.jpg?$1440_810_JPG$"
        }
      />
      <News
        title={"Home Appliances"}
        desc={
          "Get up to $1,300 off select Bespoke models from America's #1 appliance brand."
        }
        color="#000"
        btn={button1}
        img={
          "https://images.samsung.com/is/image/samsung/assets/us/home/07102024-2/LOB1DT.jpg?$1440_810_JPG$"
        }
        bg={"#000"}
      />

      <News
        title={"Sustainability"}
        subtitle={"Trade-in and save up to $100"}
        desc={"We'll deliver your new TV and recycle your old TV for you."}
        color="#000"
        btn={button1}
        img={
          "https://images.samsung.com/is/image/samsung/assets/us/home/07192024/SDSAC-7399-S95C-2-HP-LOB-FullBleed-DT-1440x810.jpg?$1440_810_JPG$"
        }
        bg={"#000"}
      />
    </>
  );
}

export default App;
