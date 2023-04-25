import React, { useState } from "react";
import SimpleCountdown from "./components/SimpleCountdown";
import FirstCountdownUI from "./components/FirstCountdownUI";
import { CountdownRenderProps } from "./interfaces";
import SecondCountdownUI from "./components/SecondCountdownUI";
// import useCountdown from "./hooks/useCountdown";
import HeadlessButton from "./components/HeadlessButton";
import ReuseButton from "./components/ReuseButton";
import ReuseMergeExampleButton from "./components/ReuseMergeExampleButton";
// import { twMerge } from "tailwind-merge";

function App() {
  // This is used for creating a component as Hook.
  // const date = new Date("27 April, 2023");
  // const { timeLeft, isValidDate, isValidFutureDate } = useCountdown({ date });

  const [busy, setBusy] = useState(false);
  const [busy1, setBusy1] = useState(false);
  const [busy2, setBusy2] = useState(false);

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

      <button
        onClick={(e) => {
          console.log("e.target", e.target);
        }}
      >
        Clicky!!!!!!
      </button>

      <ReuseButton
        onClick={() => {
          setBusy1(true);
          setTimeout(() => {
            setBusy1(false);
          }, 3000);
        }}
        buttonBaseClasses={{
          backgroundColor: "bg-red-600 hover:bg-red-400",
          padding: "p-5 px-1 py-2",
        }}
        busy={busy1}
      >
        Reuse Button
      </ReuseButton>

      <ReuseMergeExampleButton
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
      </ReuseMergeExampleButton>
    </div>
  );
}

export default App;
