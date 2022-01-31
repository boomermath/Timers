import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  seconds = 0;
  timer?: NodeJS.Timeout;

  ngOnDestroy() {
    this.stop();
  }

  get secondsDisplay() {
    return new Date(this.seconds * 1000).toISOString().substring(11, 19);
  }

  start() {
    this.timer = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  stop() {
    clearInterval(this.timer!);
  }

  reset() {
    this.seconds = 0;
    this.stop();
  }
}
