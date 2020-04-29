import { Component, OnInit } from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import {
  coincoinModel,
  coincoinList,
} from "src/app/shared/model/coincoin.model";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnInit {
  private map: mapboxgl.Map;
  coinList: Array<coincoinModel>;

  constructor() {}

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken =
      "pk.eyJ1IjoibG91bHAiLCJhIjoiY2s5azB5bTkyMGMxYTNncGlvYWp6c3RkaCJ9.1-jFUowFjw6rFAbJuZTVYQ";

    this.coinList = coincoinList;

    this.map = new mapboxgl.Map({
      container: "map",
      zoom: 5,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [1.7191, 46.7111],
    });

    this.fillMapWithCoincoin();
  }

  private fillMapWithCoincoin() {
    this.coinList.forEach((coin) => {
      const popup = new mapboxgl.Popup().setHTML(
        `<h1>${coin.name}</h1>`
      );
      const marker = new mapboxgl.Marker()
        .setLngLat([coin.longitude, coin.latitude])
        .addTo(this.map)
        .setPopup(popup);
    });
  }
}
