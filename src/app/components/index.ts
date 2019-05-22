import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { UserFormInputOutputComponent } from './user-form-input-output/user-form-input-output.component';
import { UserFormRxjsServiceComponent } from './user-form-rxjs-service/user-form-rxjs-service.component';
import { UserFormGenericRxjsServiceComponent } from './user-form-generic-rxjs-service/user-form-generic-rxjs-service.component';
import { UserFormNgxsComponent } from './user-form-ngxs/user-form-ngxs.component'
import { AttendeeFormComponent } from './attendee-form/attendee-form.component';
import { AttendeeListComponent } from './attendee-list/attendee-list.component';
import { AttendeeFilterComponent } from './attendee-filter/attendee-filter.component';
import { AttendeeDetailComponent } from './attendee-detail/attendee-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GrowlNotificationComponent } from './growl-notification/growl-notification.component';

export const COMPONENTS = [
    ChildComponent,
    GrandChildComponent,
    UserFormInputOutputComponent,
    UserFormRxjsServiceComponent,
    UserFormGenericRxjsServiceComponent,
    UserFormNgxsComponent,
    AttendeeFormComponent,
    AttendeeListComponent,
    AttendeeFilterComponent,
    AttendeeDetailComponent,
    NavBarComponent,
    GrowlNotificationComponent
]

export const ENTRY_COMPONENTS = [
    AttendeeFormComponent
]