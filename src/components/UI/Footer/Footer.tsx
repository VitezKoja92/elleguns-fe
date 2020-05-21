import React from "react";
import "./Footer.scss";

function Footer(props: FooterProps) {
  return <div className="footer">{props.children}</div>;
}

export type FooterProps = {
  children: JSX.Element[];
};

export default Footer;
