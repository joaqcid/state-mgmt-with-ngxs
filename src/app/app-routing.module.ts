import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './pages/angular/angular.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { NgxsComponent } from './pages/ngxs/ngxs.component';
import { RxjsServiceComponent } from './pages/rxjs-service/rxjs-service.component';
import { RxjsServiceIIComponent } from './pages/rxjs-service-ii/rxjs-service-ii.component';
import { GenericRxjsServiceComponent } from './pages/generic-rxjs-service/generic-rxjs-service.component';
import { GenericRxjsServiceIIComponent } from './pages/generic-rxjs-service-ii/generic-rxjs-service-ii.component';

const routes: Routes = [
  {
    path: 'angular', component: AngularComponent,
    data: { title: 'Angular', description: '' }
  },
  {
    path: 'rxjs', component: RxjsComponent,
    data: { title: 'Rxjs', description: '' }
  },
  {
    path: 'rxjs-service', component: RxjsServiceComponent,
    data: { title: 'Rxjs Service I', description: '' }
  },
  {
    path: 'rxjs-service-ii', component: RxjsServiceIIComponent,
    data: { title: 'Rxjs Service II', description: '' }
  },
  {
    path: 'generic-rxjs-service', component: GenericRxjsServiceComponent,
    data: { title: 'Rxjs Service I', description: '' }
  },
  {
    path: 'generic-rxjs-service-ii', component: GenericRxjsServiceIIComponent,
    data: { title: 'Rxjs Service II', description: '' }
  },
  {
    path: 'ngxs', component: NgxsComponent,
    data: { title: 'Ngxs', description: '' }
  },
  {
    path: 'ngxs-ii', component: NgxsComponent,
    data: { title: 'Ngxs II', description: '' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
