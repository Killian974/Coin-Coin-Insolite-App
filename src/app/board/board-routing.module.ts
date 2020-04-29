import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BoardPage } from "./board.page";

const routes: Routes = [
  {
    path: "",
    component: BoardPage,
    children: [
      {
        path: "map",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./map/map.module").then((m) => m.MapPageModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardPageRoutingModule {}
