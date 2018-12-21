import { BaseElement } from "./base-element.js";

export class GoogleMap extends BaseElement {
  constructor(centerOfMap, data) {
    super();
    this.centerOfMap = centerOfMap;
    this.data = data;
  }

  createElement() {
    super.createElement();

    setTimeout(() => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: this.centerOfMap
      });

      for (let vahan of this.data) {
        let [lat, long] = vahan.latLong.split(" ");
        console.log("lat:" + lat);
        let myLatlng = new window.google.maps.LatLng(lat, long);

        var marker = new window.google.maps.Marker({
          position: myLatlng,
          map: map
        });

        marker.setMap(map);
      }
    }, 0);
  }
  getElementString() {
    return `<div style = "width:800px; height:400px;" id="map"></div>`;
  }
}
