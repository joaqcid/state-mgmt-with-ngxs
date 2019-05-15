import { UserState } from './states/user/user.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from './../environments/environment';
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
import { NgxsIIComponent } from './pages/ngxs-ii/ngxs-ii.component';
import { ChildComponent } from './components/child/child.component';
import { GrandChildComponent } from './components/grand-child/grand-child.component';
import { UserFormInputOutputComponent } from './components/user-form-input-output/user-form-input-output.component';
import { UserFormRxjsServiceComponent } from './components/user-form-rxjs-service/user-form-rxjs-service.component';
import { GenericRxjsServiceComponent } from './pages/generic-rxjs-service/generic-rxjs-service.component';
import { GenericRxjsServiceIIComponent } from './pages/generic-rxjs-service-ii/generic-rxjs-service-ii.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormGenericRxjsServiceComponent } from './components/user-form-generic-rxjs-service/user-form-generic-rxjs-service.component';
import { UserFormNgxsComponent } from './components/user-form-ngxs/user-form-ngxs.component';

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
    NgxsIIComponent,
    ChildComponent,
    GrandChildComponent,
    UserFormInputOutputComponent,
    UserFormRxjsServiceComponent,
    GenericRxjsServiceComponent,
    GenericRxjsServiceIIComponent,
    UserFormGenericRxjsServiceComponent,
    UserFormNgxsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      PageHeadState,
      ClickState,
      UserState
    ], { developmentMode: !environment.production }),
    NgxsDispatchPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      name: 'Ngxs State Management'
    }),
    ReactiveFormsModule,
    NgbModule
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
