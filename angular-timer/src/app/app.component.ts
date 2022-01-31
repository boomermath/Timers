import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  seconds = 0;
  timer?: NodeJS.Timeout;

  get secondsDisplay() {
    return new Date(this.seconds * 1000).toISOString().substring(11, 19)
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
