import React from "react";
import { configurator } from "../../features";

export interface IProps {
  label: string;
  type: "button" | "submit" | "reset";
}

const Button = (props: IProps) => {
  const { label , type="button"} = props;
  return (
    <button type={type}
      style={configurator.style} >
      {label}
    </button>
  )

}

export default Button;