import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NgxsComponent } from './ngxs/ngxs.component';

const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'ngxs', component: NgxsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
