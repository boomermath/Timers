<template>
  <div>
    <p id="timer">{{ formattedTime }}</p>
    <button @click="start()">Start</button>
    <button @click="stop()">Stop</button>
    <button @click="reset()">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seconds: 0,
      timer: null,
    };
  },
  computed: {
    formattedTime() {
      return new Date(this.seconds * 1000).toISOString().substring(11, 19);
    },
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.seconds++;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.stop();
      this.seconds = 0;
    },
  },
};
</script>

<style>
:root {
  text-align: center;
}
</style>
