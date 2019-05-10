import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Hello world!"

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.title = "Bye World!"
  }
}
