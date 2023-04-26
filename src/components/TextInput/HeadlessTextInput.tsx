import React, { useEffect, useRef, RefObject } from "react";

export interface HeadlessTextInputProps {
  variant?: string; //Not Used Yet
  type?: string;
  name?: string;
  role?: string;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  wrapperClassName?: string;
  className: string;
  autoComplete?: string;
  value: string;
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  ariaDescribedby?: string;
  htmlFor?: string;
  placeholder?: string;
  textInputSuffix?: React.ReactNode;
  textInputPrefix?: React.ReactNode;
  textInputBottom?: React.ReactNode;
  error?: React.ReactNode;
  label?: React.ReactNode;
  onChange: (value?: string) => void;
  onBlur?: (value?: string) => void;
  onFocus?: (value?: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void;
  min?: string;
  forceFocus?: string;
}

type InputRef = RefObject<HTMLInputElement>;

const HeadlessTextInput: React.FC<HeadlessTextInputProps> = (props) => {
  const textInputRef: InputRef = useRef(null);

  useEffect(() => {
    if (
      props.forceFocus &&
      textInputRef.current &&
      textInputRef.current.focus
    ) {
      textInputRef.current.focus();
    }
  }, [props.forceFocus]);

  return (
    <>
      {props?.label && props.label}
      <div className={props.wrapperClassName}>
        {props?.textInputPrefix && props.textInputPrefix}
        <input
          autoComplete={props.autoComplete}
          inputMode={props.inputMode}
          role={props.role}
          id={props.id}
          value={props.value}
          ref={textInputRef}
          type={props.type}
          name={props.name}
          className={props.className}
          placeholder={props.placeholder}
          aria-describedby={props.ariaDescribedby}
          disabled={props.disabled}
          checked={props.checked}
          onChange={(e) => props.onChange(e.target.value)}
          onBlur={(e) => {
            if (props.onBlur) {
              props.onBlur(e.target.value);
            }
          }}
          onFocus={(e) => {
            if (props.onFocus) {
              props.onFocus(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            props.onKeyDown?.(e);
          }}
          onWheel={(e) => {
            props.onWheel?.(e);
          }}
          min={props?.min ? props.min : ""}
        />
        {props?.textInputSuffix && props.textInputSuffix}
      </div>
      {props?.error && props.error}
    </>
  );
};

HeadlessTextInput.defaultProps = {
  type: "text",
};

export default HeadlessTextInput;
