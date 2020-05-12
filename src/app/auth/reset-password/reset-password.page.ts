import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  emailToReset: '';
  emailResetSend: boolean;

  constructor(
      public afAuth: AngularFireAuth,
      public alertController: AlertController,
      public toastController: ToastController,
      private router: Router,
  ) { }

  ngOnInit() {
    this.emailResetSend = false;
  }

  resetPassword(email:string) {
    email = this.emailToReset;
    return firebase.auth().sendPasswordResetEmail(email);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Attention !',
      message: 'Cette action est <b>irréversible</b>. Êtes vous sur de vouloir réinitialiser votre adresse email ?',
      buttons: [
        {
          text: 'Fermer',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('abandon');
          }
        }, {
          text: 'Oui, je suis sûr !',
          handler: () => {
            this.resetPassword(this.emailToReset);
            this.emailResetSend = true;
            this.presentToast();
            this.router.navigateByUrl('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: "success",
      position: "top",
      message: 'Un lien vient de vous être transmis par mail.',
      duration: 5000
    });
    toast.present();
  }

}
