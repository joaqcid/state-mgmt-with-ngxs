import { FirestoreService } from './firestore.service';
import { Injectable } from '@angular/core';
import { Attendee } from '../models/attendee';

@Injectable({
  providedIn: 'root'
})
export class AttendeeFirestore extends FirestoreService<Attendee> {

  protected basePath: string = 'attendees';

}
