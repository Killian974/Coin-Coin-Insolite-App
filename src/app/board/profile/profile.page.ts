import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
      public afAuth: AngularFireAuth,
      public toastController: ToastController,
      private router: Router,

  ) { }

  ngOnInit() {
  }

  logout() {
    this.afAuth.signOut();
    this.presentToast();
    this.router.navigateByUrl('/login');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: "danger",
      position: "top",
      message: 'Vous êtes à présent déconnecté.',
      duration: 5000
    });
    toast.present();
  }

}
