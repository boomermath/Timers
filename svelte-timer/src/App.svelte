<script>
  import { onDestroy } from "svelte";
  import moment from "moment";

  let seconds = 0;
  let interval;

  function start() {
    interval = setInterval(function () {
      seconds++;
    }, 1000);
  }

  function stop() {
    clearInterval(interval);
  }

  function reset() {
    stop();
    seconds = 0;
  }

  onDestroy(() => {
    stop();
  });
</script>

<main>
  <p id="timer">{new Date(seconds * 1000).toISOString().substring(11, 19)}</p>
  <button on:click={start}>Start</button>
  <button on:click={stop}>Stop</button>
  <button on:click={reset}>Reset</button>
</main>

<style>
  :root {
    text-align: center;
  }
</style>
