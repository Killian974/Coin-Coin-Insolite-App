import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthPage } from "./auth.page";

const routes: Routes = [
  {
    path: "",
    component: AuthPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginPageModule),
      },
      {
        path: "register",
        loadChildren: () =>
          import("./register/register.module").then(
            (m) => m.RegisterPageModule
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
            import('./reset-password/reset-password.module').then(
                m => m.ResetPasswordPageModule
            ),
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
    ],
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
