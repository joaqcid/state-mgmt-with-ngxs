import { Component, OnInit, Input } from '@angular/core';
import { User } from './../../../app/models/user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
