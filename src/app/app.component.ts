import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  animation,
  keyframes,
  group,
  query
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('ferrisSignal', [
      transition('stop=>start', [
        group([
          animate(
            '10s linear',
            keyframes([
              style({ transform: 'rotate(0deg)', offset: 0 }),
              style({ transform: 'rotate(360deg)', offset: 1 })
            ])
          ),
          query('.group1 .capsule', [
            animate(
              '10s linear',
              keyframes([
                style({ transform: 'rotate(360deg)', offset: 0 }),
                style({ transform: 'rotate(0deg)', offset: 1 })
              ])
            )
          ]),
          query('.group2 .capsule', [
            animate(
              '10s linear',
              keyframes([
                style({ transform: 'rotate(300deg)', offset: 0 }),
                style({ transform: 'rotate(-60deg)', offset: 1 })
              ])
            )
          ]),
          query('.group3 .capsule', [
            animate(
              '10s linear',
              keyframes([
                style({ transform: 'rotate(240deg)', offset: 0 }),
                style({ transform: 'rotate(-120deg)', offset: 1 })
              ])
            )
          ]),
          query('.group4 .capsule', [
            animate(
              '10s linear',
              keyframes([
                style({ transform: 'rotate(180deg)', offset: 0 }),
                style({ transform: 'rotate(-180deg)', offset: 1 })
              ])
            )
          ]),
          query('.group5 .capsule', [
            animate(
              '10s linear',
              keyframes([
                style({ transform: 'rotate(120deg)', offset: 0 }),
                style({ transform: 'rotate(-240deg)', offset: 1 })
              ])
            )
          ]),
          query('.group6 .capsule', [
            animate(
              '10s linear',
              keyframes([
                style({ transform: 'rotate(60deg)', offset: 0 }),
                style({ transform: 'rotate(-300deg)', offset: 1 })
              ])
            )
          ])
        ])
      ]),
      transition('start=>stop', [animate(0, style({ animate: 'none' }))])
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
