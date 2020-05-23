import React, { useState } from "react";
import "./Entrance.scss";
import LoginAndRegister from "../LoginAndRegister/LoginAndRegister";
import TextButton from "../UI/TextButton/TextButton";
import { ActiveLanguage } from "../../enums/active-language.enum";
import DotSeparator from "../UI/DotSeparator/DotSeparator";
import Footer from "../UI/Footer/Footer";

function Entrance() {
  const [activeLanguage, setActiveLanguage] = useState(ActiveLanguage.English);

  return (
    <div className="entrance-wrapper">
      <div className="left">
        <div className="logo-container"></div>
        <LoginAndRegister />
        <Footer>
          {/* Add a link to privacy policy */}
          <TextButton linkUrl="#" text="Privacy Policy" />
          <div className="language-wrapper">
            <TextButton
              text="EN"
              active={activeLanguage === ActiveLanguage.English}
              click={() => setActiveLanguage(ActiveLanguage.English)}
            />
            <DotSeparator />
            <TextButton
              text="DE"
              active={activeLanguage === ActiveLanguage.German}
              click={() => setActiveLanguage(ActiveLanguage.German)}
            />
          </div>
        </Footer>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Entrance;
