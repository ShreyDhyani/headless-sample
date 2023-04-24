import { useState, useRef, useEffect } from "react";
import { calculateTimeLeft } from "../utils/calculateTimeLeft";

export interface useCountdownProps {
  date: Date;
}

const useCountdown = (props: useCountdownProps) => {
  const initialTimeLeft = calculateTimeLeft(props.date);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const timer = useRef<number>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(props.date));
    }, 1000);

    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current);
      }
    };
  }, [props.date]);

  let isValidDate = true,
    isValidFutureDate = true;

  if (timeLeft === null) isValidDate = false;
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false;

  // We return these computed values for the passed date prop to our hook
  return { isValidDate, isValidFutureDate, timeLeft };
};

export default useCountdown;
