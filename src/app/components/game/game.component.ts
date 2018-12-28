import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  a: number;
  b: number;
  sign: string;
  res: number;
  ures: number;
  error = false;

  constructor() {}

  ngOnInit() {
    this.generate();
  }

  generate() {
    this.a = this.getRandomInt(1, 10);
    this.b = this.getRandomInt(1, 10);
    this.res = this.a * this.b;
    this.sign = Math.random() > 0.5 ? '*' : '/';
    if (this.sign === '/') {
      const x = this.res;
      this.res = this.a;
      this.a = x;
    }
    this.ures = null;
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  check() {
    if (this.res === this.ures) {
      this.error = false;
      this.generate();
    } else {
      this.error = true;
    }
  }
}
