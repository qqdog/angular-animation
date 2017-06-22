import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  animation,
  useAnimation,
  keyframes,
  group,
  query
} from '@angular/animations';

export const rotateAnimation = animation(
  animate(
    '10s linear',
    keyframes([
      style({ transform: 'rotate({{start}}deg)', offset: 0 }),
      style({ transform: 'rotate({{end}}deg)', offset: 1 })
    ])
  ),
  { params: { start: 0, end: 360 } }
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('ferrisSignal', [
      transition('stop=>start', [
        group([
          useAnimation(rotateAnimation, { params: { start: 0, end: 360 } }),
          query('.group1 .capsule', [
            useAnimation(rotateAnimation, { params: { start: 360, end: 0 } })
          ]),
          query('.group2 .capsule', [
            useAnimation(rotateAnimation, { params: { start: 300, end: -60 } })
          ]),
          query('.group3 .capsule', [
            useAnimation(rotateAnimation, { params: { start: 240, end: -120 } })
          ]),
          query('.group4 .capsule', [
            useAnimation(rotateAnimation, { params: { start: 180, end: -180 } })
          ]),
          query('.group5 .capsule', [
            useAnimation(rotateAnimation, { params: { start: 120, end: -240 } })
          ]),
          query('.group6 .capsule', [
            useAnimation(rotateAnimation, { params: { start: 60, end: -300 } })
          ])
        ])
      ]),
      transition('start=>stop', [style({ animate: 'none' })])
    ]),
    trigger('status', [state('shaking', style({}))])
  ]
})
export class AppComponent {
  title = 'app works!';
  ferrisSignal = 'stop';
  status: string;

  stopSignal() {
    this.ferrisSignal = 'stop';
  }

  startSignal() {
    this.ferrisSignal = 'start';
  }

  shake() {
    this.status = 'shaking';
  }
}

// shaking not done
