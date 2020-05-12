import { Component, OnInit } from "@angular/core";
import {
  coincoinModel,
  coincoinList,
} from "src/app/shared/model/coincoin.model";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.page.html",
  styleUrls: ["./gallery.page.scss"],
})
export class GalleryPage implements OnInit {
  public coinList: Array<coincoinModel> = coincoinList;

  constructor() {}

  ngOnInit() {}
}
