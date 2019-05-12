import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched, Store, ofActionSuccessful } from '@ngxs/store';
import { RouterNavigation } from '@ngxs/router-plugin';
import { SetPageHead } from '../states/state/page-head.actions';
import { PageHeadState } from '../states/state/page-head.state';

@Injectable({ providedIn: 'root' })
export class RouteHandler {

    constructor(
        private router: Router,
        private actions$: Actions,
        private store: Store,
        private pageHeadState: PageHeadState
    ) {
        this.actions$
            .pipe(ofActionSuccessful(RouterNavigation))
            .subscribe((routerNavigation: RouterNavigation) => {
                const { title, description } = routerNavigation.routerState.root.firstChild.data

                this.store.dispatch(new SetPageHead({
                    title,
                    description
                }))
            });
    }
}