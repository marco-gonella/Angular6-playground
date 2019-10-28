import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from '@shared/interfaces/user.interface.ts';

@Injectable()
export class UsersService {

    users: any;

    constructor(private fs: AngularFirestore, private db: AngularFireDatabase) {
        this.users = this.fs.collection('users');
    }

    getUsers(): Observable<any> {
        return this.users.snapshotChanges()
            .pipe(map((users: any) => {
                return users.map((e) => {
                    return {
                        ...e.payload.doc.data(),
                        id: e.payload.doc.id,
                    }
                })

            }));
    }

    getUserInfo(userId: string): any {
        // const query = this.db.collection('users/userId')

        return new Promise((resolve, reject) => {
            this.fs.collection('users').doc(userId).snapshotChanges()
                .subscribe((e) => {
                    resolve({
                        ...e.payload.data(),
                        id: e.payload.id,
                    })
                })
        });
    }


    addUser(user: User): Promise<any> {
        return this.users.add(user);
    }

    modifyUser(user: User): Promise<any> {
        // return this.users.add({ ...user });
        return this.fs.doc('users/' + user.id).update(user);
    }

    deleteUser(user: User) {
        return this.fs.doc("users/" + user.id).delete();
    }


}