import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './pages/angular/angular.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { RxjsServiceComponent } from './pages/rxjs-service/rxjs-service.component';
import { RxjsServiceIIComponent } from './pages/rxjs-service-ii/rxjs-service-ii.component';
import { NgxsComponent } from './pages/ngxs/ngxs.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    RxjsComponent,
    RxjsServiceComponent,
    RxjsServiceIIComponent,
    NgxsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
