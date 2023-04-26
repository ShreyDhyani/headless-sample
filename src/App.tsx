import React, { useState } from "react";
import SimpleCountdown from "./components/SimpleCountdown";
import FirstCountdownUI from "./components/FirstCountdownUI";
import { CountdownRenderProps } from "./interfaces";
import SecondCountdownUI from "./components/SecondCountdownUI";
// import useCountdown from "./hooks/useCountdown";
import HeadlessButton from "./components/Button/src/HeadlessButton";
import ReuseButton from "./components/Button/src/ReuseButton";
import HeadlessTextInput from "./components/TextInput/HeadlessTextInput";
import ReuseTextInput from "./components/TextInput/ReuseTextInput";
// import ReuseMergeExampleButton from "./components/ReuseButton/ReuseButton";
// import { twMerge } from "tailwind-merge";

function App() {
  // This is used for creating a component as Hook.
  // const date = new Date("27 April, 2023");
  // const { timeLeft, isValidDate, isValidFutureDate } = useCountdown({ date });

  const [busy, setBusy] = useState(false);
  // const [busy1, setBusy1] = useState(false);
  const [busy2, setBusy2] = useState(false);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setBusy(true);
    setTimeout(() => {
      console.log("WAITING!!!!!>>", event.target);
      setBusy(false);
    }, 3000);
  };

  // console.log("ONE>>>", twMerge("p-3", "py-2 px-4"));
  // console.log("TWO>>>", twMerge("p-3", "px-4"));
  // console.log("THREE>>>", twMerge("p-3", "py-4"));
  // console.log("FOUR>>>", twMerge("p-3", "pl-4"));
  // console.log("FIVE>>>", twMerge("p-[10px]", "px-4"));

  return (
    <div className="flex items-center justify-center mt-10 flex-col gap-y-5">
      <SimpleCountdown date={new Date("24 Aug, 2023")}>
        {(renderProps: CountdownRenderProps) => (
          <FirstCountdownUI {...renderProps} />
        )}
      </SimpleCountdown>
      <SimpleCountdown date={new Date("26 April, 2023")}>
        {(renderProps: CountdownRenderProps) => (
          <SecondCountdownUI {...renderProps} />
        )}
      </SimpleCountdown>
      {/* {timeLeft && isValidDate && isValidFutureDate && (
        <FirstCountdownUI
          timeLeft={timeLeft}
          isValidDate={isValidDate}
          isValidFutureDate={isValidFutureDate}
        />
      )} */}

      <HeadlessButton
        className={
          "text-white w-32 py-4 font-extrabold rounded-lg hover:bg-blue-500 " +
          (busy ? "bg-blue-500" : "bg-blue-600")
        }
        onClick={handleClick}
        busy={busy}
      >
        Click Me !!
      </HeadlessButton>

      <ReuseButton
        className="p-0 py-2 bg-yellow-700 hover:bg-yellow-300 hover:text-black font-extrabold w-[400px] text-4xl transform"
        onClick={() => {
          setBusy2(true);
          setTimeout(() => {
            setBusy2(false);
          }, 3000);
          console.log("Hello from merge button");
        }}
        busy={busy2}
      >
        Reuse Test Button
      </ReuseButton>

      <div className="w-1/3 flex flex-col">
        <HeadlessTextInput
          wrapperClassName="flex justify-center items-center relative"
          className="border border-black rounded-md w-full pl-6 pr-2 py-1"
          label={<label className="text-center">This is text input</label>}
          error={
            value.toLowerCase() === "error" && (
              <div className="text-red-500 font-extrabold text-center">
                Error Here
              </div>
            )
          }
          type="text"
          textInputPrefix={<div className="absolute top-1 left-2">₹</div>}
          textInputSuffix={<div className="absolute top-1 right-2">%</div>}
          onChange={(value) => {
            if (value || value === "") setValue(value);
          }}
          value={value}
        />
      </div>
      <div className="w-1/3">
        <ReuseTextInput
          value={value1}
          onChange={(value) => {
            if (value || value === "") setValue1(value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
