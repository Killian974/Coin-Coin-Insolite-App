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
      {
        path: "gallery",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./gallery/gallery.module").then(
                (m) => m.GalleryPageModule
              ),
          },
        ],
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./profile/profile.module").then((m) => m.ProfilePageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardPageRoutingModule {}
