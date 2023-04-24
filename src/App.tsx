import React from "react";
import SimpleCountdown from "./components/SimpleCountdown";
import FirstCountdownUI from "./components/FirstCountdownUI";
import { CountdownRenderProps } from "./interfaces";
import SecondCountdownUI from "./components/SecondCountdownUI";
import useCountdown from "./hooks/useCountdown";

function App() {
  const date = new Date("27 April, 2023");

  const { timeLeft, isValidDate, isValidFutureDate } = useCountdown({ date });

  return (
    <>
      <SimpleCountdown date={new Date("24 Aug, 2023")}>
        {(renderProps: CountdownRenderProps) => (
          <FirstCountdownUI {...renderProps} />
        )}
      </SimpleCountdown>
      <SimpleCountdown date={new Date("25 April, 2023")}>
        {(renderProps: CountdownRenderProps) => (
          <SecondCountdownUI {...renderProps} />
        )}
      </SimpleCountdown>
      {timeLeft && isValidDate && isValidFutureDate && (
        <FirstCountdownUI
          timeLeft={timeLeft}
          isValidDate={isValidDate}
          isValidFutureDate={isValidFutureDate}
        />
      )}
    </>
  );
}

export default App;
