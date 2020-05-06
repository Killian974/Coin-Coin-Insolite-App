import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import * as uuid from 'uuid';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



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
      public afAuth: AngularFireAuth,
      public toastController: ToastController,
      private router: Router,
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.afDB.object('Users/' + uuid.v4()).set({
      displayName: this.dataUser.firstname + ' ' + this.dataUser.lastname,
      email: this.dataUser.email
    });
    this.presentToast();
    this.router.navigateByUrl('/board/map');
  }

  logout() {
    this.afAuth.signOut();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: "success",
      position: "top",
      message: 'Vous êtes à présent inscrit ! ',
      duration: 5000
    });
    toast.present();
  }

}
