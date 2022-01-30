import { useState, useEffect } from "react";
import moment from "moment";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalFunc;

    if (isRunning) {
      intervalFunc = setInterval(() => {
        setSeconds((s) => ++s);
      }, 1000);
    } else {
      clearInterval(intervalFunc);
    }

    return () => {
      clearInterval(intervalFunc);
    };
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center" }}>
      <p id="timer">{new Date(seconds * 1000).toISOString().substring(11, 19);}</p>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setIsRunning(false); setSeconds(0) }}>Reset</button>
    </div >
  );
}

export default App;
