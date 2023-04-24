import React from "react";
import { TimeLeft } from "../interfaces";

export interface SecondCountdownUIProps {
  timeLeft: TimeLeft;
  isValidDate: boolean;
  isValidFutureDate: boolean;
}

const SecondCountdownUI: React.FC<SecondCountdownUIProps> = ({
  timeLeft,
  isValidDate,
  isValidFutureDate,
}) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="font-bold text-red-500 text-3xl">Second Countdown UI</h3>
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
        <div className="text-red-400">
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

export default SecondCountdownUI;
