import React from "react";
import { TimeLeft } from "../interfaces";

export interface FirstCountdownUIProps {
  timeLeft: TimeLeft;
  isValidDate: boolean;
  isValidFutureDate: boolean;
}

const FirstCountdownUI: React.FC<FirstCountdownUIProps> = ({
  timeLeft,
  isValidDate,
  isValidFutureDate,
}) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="font-bold text-blue-500 text-3xl">First Countdown UI</h3>
      {!isValidDate && <div>Pass in a valid date props</div>}
      {!isValidFutureDate && (
        <div>
          Time up, let's pass a future date to procrastinate more{" "}
          <span role="img" aria-label="sunglass-emoji">
            😎
          </span>
        </div>
      )}
      {isValidDate && isValidFutureDate && timeLeft && (
        <div className="text-blue-400">
          <strong className="">{timeLeft.days}</strong> days,{" "}
          <strong className="countdown-header">{timeLeft.hours}</strong> hours,{" "}
          <strong className="countdown-header">{timeLeft.minutes}</strong>{" "}
          minutes,{" "}
          <strong className="countdown-header">{timeLeft.seconds}</strong>{" "}
          seconds
        </div>
      )}
    </div>
  );
};

export default FirstCountdownUI;
