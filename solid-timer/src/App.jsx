import { createSignal, onCleanup } from "solid-js";

function App() {
  const [seconds, setSeconds] = createSignal(0);

  let interval;

  const start = () => {
    interval = setInterval(() => {
      setSeconds(seconds() + 1);
    }, 1000);
  };

  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div style="text-align:center">
      <p id="timer">
        {new Date(seconds() * 1000).toISOString().substring(11, 19)}
      </p>
      <button onClick={start}>Start</button>
      <button onClick={() => clearInterval(interval)}>Stop</button>
      <button
        onClick={() => {
          clearInterval(interval);
          setSeconds(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
