import {Component, AfterViewInit, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-viva-map-cmp',
  templateUrl: './viva-map-cmp.component.html',
  styleUrls: ['./viva-map-cmp.component.scss']
})
export class VivaMapCmpComponent implements AfterViewInit, OnInit {
  constructor() { }
  map;
  // retrieve from https://gist.github.com/ThomasG77/61fa02b35abf4b971390
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });
  public latitude = -1.6572382142948774;
  public longitude = 29.221804601783905;

  ngAfterViewInit(): void {
    this.getCustomerCurrentPosition();
    this.createMap();
    this.onLocateAreaDng();
    this.onLocateHealth();
  }
  ngOnInit(): void {
    // this.getCustomerCurrentPosition();
  }
  onLocateHealth(){
  const health = L.circle([-1.652698, 29.210072], {
      color: '#19bedb',
      fillColor: '#2e3bff',
      fillOpacity: 0.4,
      radius: 100
    }).addTo(this.map);
  health.bindPopup('Hôpital');
  const health2 = L.circle([-1.668484, 29.224834], {
      color: '#19bedb',
      fillColor: '#2e3bff',
      fillOpacity: 0.4,
      radius: 100
    }).addTo(this.map);
  health2.bindPopup('Hôpital');
  }
  onLocateAreaDng(){
    const circle1 = L.circle([-1.60033873773383, 29.22633636363363], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 150
    }).addTo(this.map);
    // L.Rou.control()
    const circle2 = L.circle([-1.6533873773383, 29.24633636363363], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 800
    }).addTo(this.map);
    L.Routing.control({
      router: L.Routing.osrmv1({
        serviceUrl: `http://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      lineOptions: {styles: [{color: '#242c81', weight: 7}]},
      fitSelectedRoutes: false,
      altLineOptions: {styles: [{color: '#ed6852', weight: 7}]},
      show: false,
      routeWhileDragging: true,
      waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
      ]
    }).addTo(this.map);
    const circle3 = L.circle([-1.6933873773383, 29.24633636363363], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map);
    // adding legeng to circle
    circle2.bindPopup('Zône à risque');
    circle1.bindPopup('Zône à risque');
    circle3.bindPopup('Zône à risque');
  }
  getCustomerCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          // return [position.coords.altitude, position.coords.longitude];
        }
      }, (error) => {
        console.log(error.message);
        this.latitude = 0;
        this.longitude = 0;
      });
    }
  }
  createMap() {
    const myCurrentLoc = {
      lat: -2.405299,
      lng: 23.532715
    };
    const zoomLevel = 6;
    this.map = L.map('map', {
      center: [myCurrentLoc.lat, myCurrentLoc.lng],
      zoom: zoomLevel
    });
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 2,
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
    const descriptionWikipedia = `Votre actuelle position`;
    this.getCustomerCurrentPosition();
    const popupOptions = {
      coords: {
        lat: this.latitude,
        lng: this.longitude
      },
      text: descriptionWikipedia,
      open: true
    };
    this.addMarker(popupOptions);
    this.map.on('click', (event) => {
     const popup = L.popup();
     popup.setLatLng(event.latlng)
        .setContent('Les coordonées sont de ce points sont (Latitude et Longitude) ' + event.latlng.toString())
        .openOn(this.map);
    });
  }
  addMarker({coords, text, open}) {
    if (coords[0] !== ''){
      console.log('david maene isisisisisisisisisisisisisisisisisisisisisisisisi' + coords[1]);
      const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
      if (open) {
        marker.addTo(this.map).bindPopup(text).openPopup();
      } else {
        marker.addTo(this.map).bindPopup(text);
      }
    }
  }
}
