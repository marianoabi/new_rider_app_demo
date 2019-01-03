import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getRoutes() {
    // console.log(this.afd.list('/Routes'));
    return this.afd.list('/Routes');
  }
}