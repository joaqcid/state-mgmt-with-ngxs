import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './pages/angular/angular.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { NgxsComponent } from './pages/ngxs/ngxs.component';
import { RxjsServiceComponent } from './pages/rxjs-service/rxjs-service.component';
import { RxjsServiceIIComponent } from './pages/rxjs-service-ii/rxjs-service-ii.component';

const routes: Routes = [
  {
    path: 'angular', component: AngularComponent,
    data: { title: 'Angular', description: 'Angular description' }
  },
  {
    path: 'rxjs', component: RxjsComponent,
    data: { title: 'Rxjs', description: 'Angular description' }
  },
  {
    path: 'rxjs-service', component: RxjsServiceComponent,
    data: { title: 'Rxjs Service I', description: 'Angular description' }
  },
  {
    path: 'rxjs-service-ii', component: RxjsServiceIIComponent,
    data: { title: 'Rxjs Service II', description: 'Angular description' }
  },
  {
    path: 'ngxs', component: NgxsComponent,
    data: { title: 'Ngxs', description: 'Angular description' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
