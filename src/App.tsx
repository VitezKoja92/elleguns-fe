import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import "./styles/colors.scss";
import Router from "./navigation/Router";
import Footer from "./components/UI/Footer/Footer";
import TextButton from "./components/UI/TextButton/TextButton";
import DotSeparator from "./components/UI/DotSeparator/DotSeparator";
import { ActiveLanguage } from "./enums/active-language.enum";

function App() {
  const [activeLanguage, setActiveLanguage] = useState(ActiveLanguage.English);

  return (
    <div className="App">
      <BrowserRouter>
        <Router />

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
      </BrowserRouter>
    </div>
  );
}

export default App;
