import React from "react";

const Tabs = ({ tabs }) => {
  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <a key={index} href="#">
          {tab}
        </a>
      ))}
    </div>
  );
};

export default Tabs;
