import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {auth} from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dataUser = {
    email: '',
    password: ''
  };
  connected: boolean;
  email: string;
  methodOfConnection: string;

  constructor(
      public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté');
        this.connected = true;
      }
    });
  }

  login() {
    this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.email = this.dataUser.email;
    this.dataUser = {
      email: '',
      password: ''
    };
  }

  logout() {
   this.afAuth.signOut();
   this.dataUser = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }
}
