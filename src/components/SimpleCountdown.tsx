import React, { useState, useEffect, useRef } from "react";
import { calculateTimeLeft } from "../utils/calculateTimeLeft";

export interface SimpleCountdownProps {
  date: Date;
  children: any;
}
const SimpleCountdown: React.FC<SimpleCountdownProps> = ({
  date,
  children,
}) => {
  const initialTimeLeft = calculateTimeLeft(date);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const timer = useRef<number>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current);
      }
    };
  }, [date]);

  let isValidDate = true,
    isValidFutureDate = true;

  if (timeLeft === null) isValidDate = false;
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false;

  return children({
    timeLeft,
    isValidDate,
    isValidFutureDate,
  });
};

export default SimpleCountdown;
