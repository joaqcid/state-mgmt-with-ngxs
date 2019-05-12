import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ClickState } from 'src/app/states/click/click.state';
import { Observable } from 'rxjs';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Click } from 'src/app/states/click/click.actions';

@Component({
  selector: 'app-ngxs-ii',
  templateUrl: './ngxs-ii.component.html',
  styleUrls: ['./ngxs-ii.component.scss']
})
export class NgxsIIComponent implements OnInit {

  @Select(ClickState.title$) title$: Observable<string>;

  constructor() { }

  ngOnInit() {
  }

  @Dispatch()
  click = () => new Click()
}
