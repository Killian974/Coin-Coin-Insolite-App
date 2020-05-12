import { Component, OnInit, Input } from "@angular/core";
import { coincoinModel } from "../../model/coincoin.model";

@Component({
  selector: "app-coin-card",
  templateUrl: "./coin-card.component.html",
  styleUrls: ["./coin-card.component.scss"],
})
export class CoinCardComponent implements OnInit {
  @Input() coinList: Array<coincoinModel>;
  @Input() sorted: boolean;

  constructor() {}

  ngOnInit() {}
}
