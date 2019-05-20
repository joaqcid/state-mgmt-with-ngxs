import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { debounceTime, tap, catchError } from 'rxjs/operators';
import * as firebase from 'firebase';

export abstract class FirestoreService<T> {

    constructor(
        @Inject(AngularFirestore) protected fs: AngularFirestore,
    ) { }

    protected abstract basePath: string;

    newId(): string {
        return this.fs.createId();
    }

    batch() {
        return this.fs.firestore.batch()
    }

    upsert(t: Partial<T>): Promise<void> {
        let id;
        let newDoc;

        if (Object.keys(t).includes('id') && !!t['id']) {
            id = t['id']
            newDoc = Object.assign({}, this.created(), t);
        }
        else {
            id = this.newId();
            newDoc = Object.assign({}, this.created(), t, { id });
        }

        return this.fs.doc(`${this.basePath}/${id}`)
            .set(newDoc, { merge: true })
            .then(_ => {
                if (!environment.production) {
                    console.groupCollapsed(`Firestore Service [${this.basePath}] [upsert]`)
                    console.log('[Id]', id)
                    console.groupEnd()
                }
                return;
            })

    }

    // create(t: Partial<T>): Promise<void> {
    //     if (Object.keys(t).includes('id')) {
    //         const newDoc = Object.assign({}, this.created(), t);
    //         return this.safeOfflineWrites(
    //             this.fs.doc(`${this.basePath}/${t['id']}`)
    //                 .set(newDoc)
    //                 .then(_ => {
    //                     if (!environment.production) {
    //                         console.groupCollapsed(`Firestore Service [${this.basePath}] [create]`)
    //                         console.log('[Id]', t['id'])
    //                         console.groupEnd()
    //                     }
    //                     return;
    //                 })
    //         )
    //     }
    //     else {
    //         const id = this.newId();
    //         const newDoc = Object.assign({ id }, this.created(), t);
    //         return this.safeOfflineWrites(
    //             this.fs.doc(`${this.basePath}/${id}`)
    //                 .set(newDoc)
    //                 .then(_ => {
    //                     if (!environment.production) {
    //                         console.groupCollapsed(`Firestore Service [${this.basePath}] [create]`)
    //                         console.log('[Id]', id)
    //                         console.groupEnd()
    //                     }
    //                     return;
    //                 })
    //         );
    //     }
    // }

    update(id: string, t: Partial<T>): Promise<void> {
        const updatedDoc = Object.assign({}, this.updated(), t)
        return this.fs.doc<T>(`${this.basePath}/${id}`)
            .update(updatedDoc)
            .then(_ => {
                if (!environment.production) {
                    console.groupCollapsed(`Firestore Service [${this.basePath}] [update]`)
                    console.log('[Id]', id)
                    console.groupEnd()
                }
                return;
            });
    }

    delete(id: string): Promise<void> {
        return this.fs.doc(`${this.basePath}/${id}`)
            .delete()
            .then(_ => {
                if (!environment.production) {
                    console.groupCollapsed(`Firestore Service [${this.basePath}] [delete]`)
                    console.log('[Id]', id)
                    console.groupEnd()
                }
                return;
            });
    }

    doc$(id: string): Observable<T> {
        return this.fs.doc<T>(`${this.basePath}/${id}`).valueChanges().pipe(
            tap(item => {
                if (!environment.production) {
                    console.groupCollapsed(`Firestore Streaming [${this.basePath}] [doc$]`, `${id}`)
                    console.log(item)
                    console.groupEnd()
                }
            }),
            tap<T>(),
        );
    }

    ref(path: string) {
        return this.fs.doc(path).ref;
    }

    collection$(queryFn?: QueryFn): Observable<T[]> {
        return this.fs.collection<T>(`${this.basePath}`, queryFn).valueChanges().pipe(
            tap(items => {
                if (!environment.production) {
                    console.groupCollapsed(`Firestore Streaming [${this.basePath}] [collection$]`)
                    console.table(items)
                    console.groupEnd()
                }
            }),
            tap<T[]>(),
        );
    }

    protected updated() {
        return {
            updated: {
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: '',
                user: ''
            }
        }
    }

    protected created() {
        return {
            created: {
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                uid: '',
                user: ''
            }
        }
    }
}
