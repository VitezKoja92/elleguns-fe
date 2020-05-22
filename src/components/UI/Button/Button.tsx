import React from "react";
import "./Button.scss";
import { ButtonType } from "../../../enums/button-type.enum";
import { ButtonColor } from "../../../enums/button-color.enum";
import styled from "styled-components";

function Button(props: ButtonProps) {
  const buttonRaised =
    props.type === ButtonType.RaisedNotRounded ||
    props.type === ButtonType.RaisedRounded;
  const buttonRounded =
    props.type === ButtonType.RaisedRounded ||
    props.type === ButtonType.StrokedRounded;

  const StyledButton = styled.button`
    border: ${buttonRaised ? `none` : `2px solid ${props.color}`};
    border-radius: ${buttonRounded ? "20px" : "2px"};
    background-color: ${buttonRaised ? `${props.color}` : "white"};
    color: ${buttonRaised ? "white" : `${props.color}`};
    cursor: pointer;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    padding: 10px 20px;
    box-shadow: ${buttonRaised
      ? "0px 3px 1px -2px #b2b2b9, 0px 2px 2px 0px #b2b2b9, 0px 1px 5px 0px #b2b2b9"
      : "none"};
    min-width: ${props.width ? props.width : "100%"};

    &.disabled {
      background-color: #b2b2b9;
      color: white;
      pointerevents: none;
      cursor: not-allowed;
    }
  `;

  return (
    <StyledButton
      onClick={props.click}
      disabled={props.disabled}
      className={`${props.disabled ? "disabled" : ""} ${
        props.additionalClasses ? props.additionalClasses : ""
      }`}
    >
      {props.text}
    </StyledButton>
  );
}

export type ButtonProps = {
  text: string;
  color: ButtonColor;
  type: ButtonType;
  disabled: boolean;
  click?: Function;
  width?: string;
  additionalClasses?: string;
};

export default Button;
