import React from "react";
import "./TextButton.scss";

function TextButton(props: TextButtonProps) {
  return (
    <div className="text-button-wrapper">
      {props.linkUrl && (
        <a href={props.linkUrl} className="link">
          {props.text}
        </a>
      )}
      {!props.linkUrl && (
        <span
          className={`button ${props.active ? "active" : ""}`}
          onClick={props.click}
        >
          {props.text}
        </span>
      )}
    </div>
  );
}

export type TextButtonProps = {
  text: string;
  linkUrl?: string;
  click?: any;
  active?: boolean;
};

export default TextButton;
