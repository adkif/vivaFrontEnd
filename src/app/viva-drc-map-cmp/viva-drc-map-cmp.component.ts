import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import {ForStatisticsService} from '../services/for-statistics.service';

@Component({
  selector: 'app-viva-drc-map-cmp',
  templateUrl: './viva-drc-map-cmp.component.html',
  styleUrls: ['./viva-drc-map-cmp.component.scss']
})
export class VivaDrcMapCmpComponent implements OnInit, AfterViewInit {

  constructor(private forstatisticsService: ForStatisticsService) { }
  map;
  latitude = -1.6572382142948774;
  longitude = 29.221804601783905;
  DrcDataGeoJson: any;
  ngAfterViewInit(): void {
    // this.getCustomerCurrentPosition();
    this.createMap();
  }
  ngOnInit(): void {
    // this.getCustomerCurrentPosition();
    this.DrcDataGeoJson = this.forstatisticsService.myDrcData;
  }
  createMap() {
    const myCurrentLocation = {
      lat: this.latitude,
      lng: this.longitude,
    };
    const zoomLevel = 5;
    this.map = L.map('map', {
      center: [-3.030812, 24.060059],
      zoom: zoomLevel
    });
    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 25,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    // const panelInfo = L.control();
    mainLayer.addTo(this.map);

    const descriptionWikipedia = `Vous êtes ici !`;
    const popupOptions = {
      coords: this.getCustomerCurrentPosition(),
      text: descriptionWikipedia,
      open: true
    };
    // this.map.on('click', (event) => {
    //   const popup = L.popup();
    //   popup.setLatLng(event.latlng)
    //     .setContent(event.latlng.toString())
    //     .openOn(this.map);
    // });
    // @ts-ignore
    L.geoJSON(this.DrcDataGeoJson, {
      onEachFeature: this.onEachFeature
    }).addTo(this.map);
    // this.addMarker(popupOptions);
  }
  onEachFeature(feature, layer){
    if (feature.properties && feature.properties.NOM) {
      layer.bindPopup('<b>Province : </b>' + feature.properties.NOM + '<hr>' +
        '<b>Cas confirmé : </b>' + feature.properties.CODE_INS +
        '<br><b>Decès : </b>' + feature.properties.PCode +
        '<br><b>Guérit : </b>' + feature.properties.MODIF);
    }else{
      layer.bindPopup('invalid option sorry ');
    }
  }
  onShowUpInfo(proper){

  }
  onGetColor(d) {
    return d > 1000 ? '#3498db' :
      d > 500  ? '#34495e' :
        d > 200  ? '#E31A1C' :
          d > 100  ? '#FC4E2A' :
            d > 50   ? '#FD8D3C' :
              d > 20   ? '#FEB24C' :
                d > 10   ? '#FED976' :
                  '#FFEDA0';
  }
  addMarker({coords, text, open}) {
    // tslint:disable-next-line:triple-equals
    if (coords != false) {
      const marker = L.marker([coords.lat, coords.lng]);
      // const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
      if (open) {
        marker.addTo(this.map).bindPopup(text).openPopup();
      } else {
        marker.addTo(this.map).bindPopup(text);
      }
    }else {
      window.console.log('Nous ne parvenons pas à acceder à votre position \n' +
        'Vous ne pouvez pas aller plus loin desolé');
      window.location.href = 'case-home-cmp';
    }
  }
  getCustomerCurrentPosition(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          const getCustomerCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          return getCustomerCoords;
        }else{
          window.console.log('nous avons du mal a acceder a votre position');
          return false;
        }
      });
    }else{
      // window.alert('Votre actuelle position');
      window.console.log('acces location denied by user ');
      return false;
    }
  }
}
