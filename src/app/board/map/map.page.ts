import { Component, OnInit } from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import {
  coincoinModel,
  coincoinList,
} from "src/app/shared/model/coincoin.model";
import { environment } from "src/environments/environment";
import { PhotoService } from "src/app/shared/service/photo.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnInit {
  private map: mapboxgl.Map;
  coinList: Array<coincoinModel>;

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapToken;

    this.coinList = coincoinList;

    this.map = new mapboxgl.Map({
      container: "map",
      zoom: 5,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [1.7191, 46.7111],
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserLocation: true,
      showAccuracyCircle: false,
    });

    this.map.addControl(geolocate);

    this.map.on("load", () => geolocate.trigger());

    // geolocate.on("geolocate", function () {
    //   console.log("A geolocate event has occurred.", geolocate);
    // });

    this.fillMapWithCoincoin();
  }

  // Add a custom marker on map for every coincoin
  private fillMapWithCoincoin() {
    this.coinList.forEach((coin) => {
      const popup = new mapboxgl.Popup({
        className: "popup",
        closeButton: false,
      }).setHTML(
        `
        <img src="${coin.picture}" />
        <h1>${coin.name}</h1>
        <div class="divider"></div>
        <p class="description">${coin.description}</p>
        <p class="author">${coin.author}</p>
        `
      );

      // Custom marker
      const el = document.createElement("div");
      el.style.background = "#FBCD4B";
      el.style.backgroundImage = `url(${coin.picture})`;
      //TODO pass in css
      el.style.backgroundSize = "cover";
      el.style.width = "45px";
      el.style.height = "45px";
      el.style.borderRadius = "50%";
      el.style.border = "2px solid #88A550";

      const marker = new mapboxgl.Marker(el)
        .setLngLat([coin.longitude, coin.latitude])
        .addTo(this.map)
        .setPopup(popup);
    });
  }

  takePhoto() {
    this.photoService.takeNewPhoto();
  }
}
