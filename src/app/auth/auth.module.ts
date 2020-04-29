import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AuthPageRoutingModule } from "./auth-routing.module";

import { AuthPage } from "./auth.page";
import { LoginPageModule } from "./login/login.module";
import { HomePageModule } from "./home/home.module";
import { RegisterPageModule } from "./register/register.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageModule,
    HomePageModule,
    RegisterPageModule,
    AuthPageRoutingModule,
  ],
  declarations: [AuthPage],
})
export class AuthPageModule {}
