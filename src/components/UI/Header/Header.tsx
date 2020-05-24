import React from "react";
import "./Header.scss";

function Header(props: HeaderProps) {
  return <div className="Header">{props.children}</div>;
}

export type HeaderProps = {
  children: JSX.Element[];
};

export default Header;
