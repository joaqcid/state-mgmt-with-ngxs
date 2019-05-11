import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  title: string = "Hello world!"
  clickCount = 0

  constructor() { }

  ngOnInit() { }

  click() {
    this.title = `Clicked ${++this.clickCount} times`
  }

}
