import React, { FC } from "react";
import resolvedStyleProps from "../utils/resolveStyleByProps";
import HeadlessButton, {
  HeadlessButtonProps,
} from "./Button/src/HeadlessButton";

export interface ReuseButtonProps
  extends Omit<HeadlessButtonProps, "className"> {
  buttonBaseClasses?: {
    alignment?: string;
    focus?: string;
    font?: string;
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: string;
    padding?: string;
    border?: string;
    width?: string;
    disabledClasses?: string;
  };
  buttonPrefix?: React.ReactNode;
  buttonSuffix?: React.ReactNode;
}

const ReuseButton: FC<ReuseButtonProps> = (props) => {
  const defaultTheme = {
    buttonBaseClasses: {
      alignment: "inline-flex justify-center items-center",
      focus: "focus:outline-none",
      font: "font-normal text-sm",
      backgroundColor: "bg-blue-500 hover:bg-blue-700",
      textColor: "text-white",
      borderRadius: "rounded-md",
      padding: "px-4 py-2",
      border: "border border-transparent",
      width: "",
      disabledClasses: "",
    },
  };

  const finalClassNames = resolvedStyleProps(
    "buttonBaseClasses",
    [
      "alignment",
      "focus",
      "font",
      "backgroundColor",
      "textColor",
      "borderRadius",
      "padding",
      "border",
      "width",
      "disabledClasses",
    ],
    props,
    defaultTheme
  );

  return (
    <HeadlessButton
      className={finalClassNames}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled || props.busy}
      busy={props.busy}
      busyText={props.busyText}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props?.buttonPrefix && props.buttonPrefix}
      {props.children}
      {props?.buttonSuffix && props.buttonSuffix}
    </HeadlessButton>
  );
};

export default ReuseButton;
