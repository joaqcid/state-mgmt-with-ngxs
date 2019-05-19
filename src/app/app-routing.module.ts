
import { NgxsIIComponent } from './pages/ngxs-ii/ngxs-ii.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './pages/angular/angular.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { NgxsComponent } from './pages/ngxs/ngxs.component';
import { RxjsServiceComponent } from './pages/rxjs-service/rxjs-service.component';
import { RxjsServiceIIComponent } from './pages/rxjs-service-ii/rxjs-service-ii.component';
import { GenericRxjsServiceComponent } from './pages/generic-rxjs-service/generic-rxjs-service.component';
import { GenericRxjsServiceIIComponent } from './pages/generic-rxjs-service-ii/generic-rxjs-service-ii.component';
import { NgxsIIIComponent } from './pages/ngxs-iii/ngxs-iii.component';

export const PAGE_HEADS = {
  ANGULAR: { title: 'Angular', description: '' },
  RXJS: { title: 'NGXS', description: '' },
  RXJS_SERVICE_I: { title: 'Rxjs Service I', description: '' },
  RXJS_SERVICE_II: { title: 'Rxjs Service II', description: '' },
  GENERIC_SERVICE_I: { title: 'Generic Rxjs Service I', description: '' },
  GENERIC_SERVICE_II: { title: 'Generic Rxjs Service II', description: '' },
  NGXS: { title: 'Ngxs', description: '' },
  NGXS_II: { title: 'Ngxs II', description: '' },
  NGXS_III: { title: 'Ngxs III', description: 'Firebase CRUD & Ngxs State Mgmt' },
}

const routes: Routes = [
  {
    path: 'angular', component: AngularComponent,
    data: PAGE_HEADS.ANGULAR
  },
  {
    path: 'rxjs', component: RxjsComponent,
    data: PAGE_HEADS.RXJS
  },
  {
    path: 'rxjs-service', component: RxjsServiceComponent,
    data: PAGE_HEADS.RXJS_SERVICE_I
  },
  {
    path: 'rxjs-service-ii', component: RxjsServiceIIComponent,
    data: PAGE_HEADS.RXJS_SERVICE_II
  },
  {
    path: 'generic-rxjs-service', component: GenericRxjsServiceComponent,
    data: PAGE_HEADS.GENERIC_SERVICE_I
  },
  {
    path: 'generic-rxjs-service-ii', component: GenericRxjsServiceIIComponent,
    data: PAGE_HEADS.GENERIC_SERVICE_II
  },
  {
    path: 'ngxs', component: NgxsComponent,
    data: PAGE_HEADS.NGXS
  },
  {
    path: 'ngxs-ii', component: NgxsIIComponent,
    data: PAGE_HEADS.NGXS_II
  },
  {
    path: 'ngxs-iii', component: NgxsIIIComponent,
    data: PAGE_HEADS.NGXS_III
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
