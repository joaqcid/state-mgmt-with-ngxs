import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NgxsComponent } from './ngxs/ngxs.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    RxjsComponent,
    NgxsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
