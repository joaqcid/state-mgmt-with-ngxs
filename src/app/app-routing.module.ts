import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './pages/angular/angular.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { NgxsComponent } from './pages/ngxs/ngxs.component';
import { RxjsServiceComponent } from './pages/rxjs-service/rxjs-service.component';

const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'rxjs-service', component: RxjsServiceComponent },
  { path: 'ngxs', component: NgxsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
