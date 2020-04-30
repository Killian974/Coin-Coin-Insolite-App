import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import * as uuid from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  dataUser = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  userId = '';

  constructor(
      public afDB: AngularFireDatabase,
      public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.afDB.object('Users/' + uuid.v4()).set({
      displayName: this.dataUser.firstname + ' ' + this.dataUser.lastname,
      email: this.dataUser.email
    });
    this.dataUser = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  }
}
