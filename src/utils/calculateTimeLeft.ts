import isValid from "date-fns/isValid";
import { TimeLeft } from "../interfaces";

export const calculateTimeLeft = (date: Date) => {
  if (!isValid(date)) return null;
  const difference = new Date(date).getTime() - new Date().getTime();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};
