import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  count: number = 0;
  showNumber: string;

  constructor() {
    this.showNumber = '00';
  }

}
