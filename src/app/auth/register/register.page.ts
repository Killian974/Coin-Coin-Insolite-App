import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(
      public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.dataUser = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  }
}
