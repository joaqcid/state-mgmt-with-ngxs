import { PageHeadState } from './page-head/page-head.state';
import { ClickState } from './click/click.state';
import { UserState } from './user/user.state';
import { AuthState } from './auth/auth.state';
import { AttendeeState } from './attendee/attendee.state';
import { GrowlNotificationState } from './growl-notification/growl-notification.state';

export const STATES = [
    PageHeadState,
    ClickState,
    UserState,
    AuthState,
    AttendeeState,
    GrowlNotificationState
]