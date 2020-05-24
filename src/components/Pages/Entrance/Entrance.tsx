import React from "react";
import "./Entrance.scss";
import LoginAndRegister from "./LoginAndRegister/LoginAndRegister";

function Entrance() {
  return (
    <div className="Entrance">
      <div className="left">
        <div className="logo-container"></div>
        <LoginAndRegister />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Entrance;
