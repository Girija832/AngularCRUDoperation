import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  collection = [];

  constructor(){
    for (let i = 1;i<=100;i++) {
      this.collection.push(`Item ${i}.0`);
    }
  }
}
