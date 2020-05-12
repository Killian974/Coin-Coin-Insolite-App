import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { GalleryPage } from "./gallery.page";
import { RouterModule } from "@angular/router";
import { CoinCardComponent } from "src/app/shared/components/coin-card/coin-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: "", component: GalleryPage }]),
  ],
  declarations: [GalleryPage, CoinCardComponent],
})
export class GalleryPageModule {}
