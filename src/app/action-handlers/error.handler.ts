import { GrowlNotificationActions } from 'src/app/states/growl-notification/growl-notification.actions';
import { Injectable, ErrorHandler, Provider, Injector } from '@angular/core';
import { Store } from '@ngxs/store';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        private injector: Injector
    ) {

    }

    handleError(error: any) {

        const store = this.injector.get(Store);
        store.dispatch(new GrowlNotificationActions.Error(`An error ocurred. ${error.message}`))

        // Make sure to rethrow the error so Angular can pick it up
        //throw error;
    }
}

export const ErrorHandlerProvider: Provider = {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
}
