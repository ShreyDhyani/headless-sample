import React from "react";
import HeadlessTextInput, { HeadlessTextInputProps } from "./HeadlessTextInput";

export interface ReuseTextInputProps
  extends Omit<HeadlessTextInputProps, "className"> {}

const ReuseTextInput: React.FC<ReuseTextInputProps> = (props) => {
  const defaultClasses =
    "form-input mt-1 bg-white dark:bg-gray-900 block w-full rounded-md border border-gray-300 dark:border-gray-600 focus:border-gray-500 focus:ring-gray-500 focus-visible:border-red-400 font-normal sm:text-sm text-gray-900 dark:text-white";
  const defaultWrapperClasses = "w-full";
  return (
    <HeadlessTextInput
      wrapperClassName={defaultWrapperClasses}
      autoComplete={props.autoComplete}
      inputMode={props.inputMode}
      role={props.role}
      id={props.id}
      value={props.value}
      type={props.type}
      name={props.name}
      className={defaultClasses}
      placeholder={props.placeholder}
      aria-describedby={props.ariaDescribedby}
      disabled={props.disabled}
      checked={props.checked}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onKeyDown={props.onKeyDown}
      onWheel={props.onWheel}
      min={props?.min ? props.min : ""}
    />
  );
};

ReuseTextInput.defaultProps = {
  type: "text",
};

export default ReuseTextInput;
