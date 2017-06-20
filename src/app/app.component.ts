import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('ferrisSignal', [
      state('start', style({
        // 'animation': 'ferris-rotate 10s infinite linear'
      })),
      state('stop', style({
        'animation': 'none'
      }))
    ]),
    trigger('capsuleSignal', [
      state('start', style({
      })),
      state('stop', style({
        'animation': 'none'
      }))
    ]),
    trigger('status', [
      state('shaking', style({

    }))
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
  ferrisSignal: string;
  capsuleSignal: string;
  status: string;

  stopSignal() {
    this.ferrisSignal = 'stop';
    this.capsuleSignal = 'stop';
  }

  startSignal() {
    this.ferrisSignal = 'start';
    this.capsuleSignal = 'start';
  }

  shake() {
    this.status = 'shaking';
  }
}

// shaking not done
