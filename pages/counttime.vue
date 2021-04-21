<template>
  <v-app>
    <v-main>
      <div class="container">
        <div id="timer">00:000</div>
        <div class="controls">
          <v-btn @click="min" id="min">Min</v-btn>
          <v-btn @click="sec" id="sec">Sec</v-btn>
          <v-btn @click="reset" id="reset">Reset</v-btn>
          <v-btn @click="start" id="start">Start</v-btn>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return{
      startTime: null,
      timeLeft: null,
      timeToCountDown: 0,
      timerId: null,
      isRunning: false
    }
  },
  methods: {
    updateTimer(t) {
      var d = new Date(t);
      var m = d.getMinutes();
      var s = d.getSeconds();
      var ms = d.getMilliseconds();
      var timerString;
      m = ("0" + m).slice(-2);
      s = ("0" + s).slice(-2);
      ms = ("00" + ms).slice(-3);
      timerString = m + ":" + s + "." + ms;
      // timer.textContent = m + ':' + s + '.' + ms;
      timer.textContent = timerString;
      document.title = timerString;
    },

    countDown() {
      timerId = setTimeout(function() {
        // var elapsedTime = Date.now() - startTime;
        // timeLeft = timeToCountDown - elapsedTime;
        timeLeft = timeToCountDown - (Date.now() - startTime);
        // console.log(timeLeft);
        if (timeLeft < 0) {
          isRunning = false;
          start.textContent = "Start";
          clearTimeout(timerId);
          timeLeft = 0;
          timeToCountDown = 0;
          updateTimer(timeLeft);
          return;
        }
        this.updateTimer(timeLeft);
        this.countDown();
      }, 10);
      // 10ミリ秒後
    },

    start() {
      if (isRunning === false) {
        isRunning = true;
        start.textContent = "Stop";
        startTime = Date.now();
        this.countDown();
      } else {
        isRunning = false;
        start.textContent = "Start";
        timeToCountDown = timeLeft;
        this.clearTimeout(timerId);
      }
    },

    min() {
      if (isRunning === true) {
        return;
      }
      timeToCountDown += 60 * 1000;
      if (timeToCountDown >= 60 * 60 * 1000) {
        timeToCountDown = 0;
      }
      this.updateTimer(timeToCountDown);
    },

    sec() {
      if (isRunning === true) {
        return;
      }
      timeToCountDown += 1000;
      if (timeToCountDown >= 60 * 60 * 1000) {
        timeToCountDown = 0;
      }
      this.updateTimer(timeToCountDown);
    },

    reset() {
      timeToCountDown = 0;
      this.updateTimer(timeToCountDown);
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Courier New", sans-serif;
  font-size: 14px;
  background: #eee;
}

.container {
  margin: 20px auto;
  width: 365px;
  background: #fff;
  padding: 15px;
  text-align: center;
}

#timer {
  background: #ddd;
  height: 120px;
  line-height: 120px;
  font-size: 40px;
  margin-bottom: 15px;
}

.controls > div {
  cursor: pointer;
  user-select: none;
  width: 80px;
  background: #ddd;
  height: 45px;
  line-height: 45px;
  float: left;
}

.controls {
  overflow: hidden;
}

.controls > div + div {
  margin-left: 15px;
}

.controls > div:hover {
  opacity: 0.7;
}
</style>
