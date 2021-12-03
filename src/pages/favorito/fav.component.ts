import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { __await } from "tslib";


declare var google;

interface Marker {
  position: {
    lat:number,
    lng:number,
  };
  title: string;
}



 @Component({
     selector: 'fav',
     templateUrl: './fav.component.html',
     styleUrls: ['./fav.component.scss' ]
 })

 export class FavComponent implements OnInit {
   map = null;

    constructor(){}


    ngOnInit(){
      this.loadMap();
    }

  loadMap(){
    const mapEle: HTMLElement = document.getElementById('map');
    const myLatLng = {lat: -33.746113, lng: -70.745763};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      
      mapEle.classList.add('show-map');
      const marker= {
        position: {
          lat:-33.746113 ,
          lng:-70.745763
        },
        title :'punto'
      };
      this.addMarker(marker);
      
    });
  } 
  addMarker(marker: Marker){
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }










 }
     