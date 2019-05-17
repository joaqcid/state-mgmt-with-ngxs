import { AngularService } from './../../services/angular.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit {

  constructor(
    public angularService: AngularService
  ) { }

  ngOnInit() {

  }

  get user() {
    console.log("GrandChildComponent", "user")
    return this.angularService.user
  }

}
