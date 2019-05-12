import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './pages/angular/angular.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { RxjsServiceComponent } from './pages/rxjs-service/rxjs-service.component';
import { RxjsServiceIIComponent } from './pages/rxjs-service-ii/rxjs-service-ii.component';
import { NgxsComponent } from './pages/ngxs/ngxs.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { PageHeadState } from './states/page-head/page-head.state';
import { ClickState } from './states/click/click.state';

import { RouteHandler } from './action-handlers/route.handler';

// Noop handler for factory function
export function noop() { return function () { }; };

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
    AppRoutingModule,
    NgxsModule.forRoot([
      PageHeadState,
      ClickState
    ], { developmentMode: !environment.production }),
    NgxsDispatchPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      name: 'Ngxs State Management'
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: noop,
      deps: [RouteHandler],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
