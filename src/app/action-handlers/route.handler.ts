import { Injectable, Provider, APP_INITIALIZER } from '@angular/core';
import { Actions, Store, ofActionSuccessful } from '@ngxs/store';
import { RouterNavigation } from '@ngxs/router-plugin';
import { SetPageHead } from '../states/page-head/page-head.actions';

export function noop() { return () => { } }

@Injectable({ providedIn: 'root' })
export class RouteHandler {

    constructor(
        private actions$: Actions,
        private store: Store
    ) {
        this.actions$
            .pipe(ofActionSuccessful(RouterNavigation))
            .subscribe((payload: RouterNavigation) => {

                const { title, description } = payload.routerState.root.firstChild.data

                this.store.dispatch(new SetPageHead({
                    title,
                    description
                }))

            });
    }
}

export const RouteHandlerProvider: Provider = {
    provide: APP_INITIALIZER,
    useFactory: noop,
    deps: [
        RouteHandler
    ],
    multi: true
}