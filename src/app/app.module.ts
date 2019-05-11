import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './pages/angular/angular.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { NgxsComponent } from './pages/ngxs/ngxs.component';
import { RxjsServiceComponent } from './pages/rxjs-service/rxjs-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    RxjsComponent,
    NgxsComponent,
    RxjsServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
