export interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface CountdownRenderProps {
  timeLeft: TimeLeft;
  isValidDate: boolean;
  isValidFutureDate: boolean;
}
