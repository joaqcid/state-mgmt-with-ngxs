import { Component, OnInit } from '@angular/core';
import { User } from './../../../app/models/user';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  title: string = "Hello world!"
  clickCount = 0

  user: User = {
    firstName: 'Joaquin',
    lastName: 'Cid'
  }

  constructor() { }

  ngOnInit() { }

  click() {
    this.title = `Clicked ${++this.clickCount} times`
  }

  save(user: User) {
    this.user = user
  }

}
