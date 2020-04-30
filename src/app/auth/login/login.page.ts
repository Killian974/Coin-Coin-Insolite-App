import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';
import { AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook/ngx';
import {error} from 'util';

import * as uuid from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  providerFb: firebase.auth.FacebookAuthProvider;
  dataUser = {
    email: '',
    password: '',
    userId: ''
  };
  connected: boolean;
  email: string;
  methodOfConnection: string;

  constructor(
      public afDB: AngularFireDatabase,
      public afAuth: AngularFireAuth,
      private fb: Facebook,
      public plateform: Platform
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

    // tslint:disable-next-line:new-parens
    this.providerFb = new firebase.auth.FacebookAuthProvider();
  }

  login() {
    this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.email = this.dataUser.email;
    this.dataUser = {
      email: '',
      password: '',
      userId: ''
    };
  }

  facebookLogin() {
    if (this.plateform.is('cordova')) {
      console.log('cordova');
      this.facebookCordova();
    } else {
      console.log('web');
      this.facebookWeb();
    }
  }

  facebookCordova() {
    this.fb.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential)
          .then( (success) => {
            console.log('Info Facebook: ' + JSON.stringify(success));
            this.afDB.object('Users/' + uuid.v4()).set({
              displayName: success.user.displayName,
              email: success.user.email
            });
          }).catch((error) => {
            console.log('Erreur: ' + JSON.stringify(error));
      });
    }).catch((error) => { console.log(error); });
  }

  facebookWeb() {
    this.afAuth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((success) => {
          console.log('Info Facebook : ' + JSON.stringify(success));
          this.email = success.user.email;
          this.afDB.object('Users/' + uuid.v4()).set({
            displayName: success.user.displayName,
            email: success.user.email
          });
        }).catch((error) => {
          console.log('Erreur ' + JSON.stringify(error));
        });
  }

  logout() {
   this.afAuth.signOut();
   this.dataUser = {
      email: '',
      password: '',
      userId: ''
    };
  }

  ngOnInit() {
  }
}
