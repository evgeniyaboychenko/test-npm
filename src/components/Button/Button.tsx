import React from "react";

export interface IProps {
  label: string;
  type: "button" | "submit" | "reset";
  color: string;
}

const Button = (props: IProps) => {
  const { label , type="button", color} = props;
  return (
    <button type={type}
      style={{
      color: color
    }} >
      {label}
    </button>
  )

}

export default Button;