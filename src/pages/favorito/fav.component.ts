import { Component, OnInit, ViewChild } from "@angular/core";
import { Marker } from 'src/app/dato/interfaz/IMarker'
import { LoadingController, IonSlides } from "@ionic/angular";


declare var google;


 @Component({
     selector: 'fav',
     templateUrl: './fav.component.html',
     styleUrls: ['./fav.component.scss' ]
 })

 export class FavComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;


    mapRef = null;
    infoWindowsRef = null;

    //Lugares guardados para que se muenstren en el telefono

    markers: Marker[] = [
      {
        lat: -33.745719,
        lng:  -70.746316,
        title: 'casita',
        image: 'https://lh5.googleusercontent.com/p/AF1QipOCgzq_0DYB9AxD-ItTG01x2csLsSfWsawBCypc=w408-h306-k-no',
        text: 'Anialt ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
      },
      {
        lat: -33.744363,
        lng: -70.751395,
        title: 'j3',
        image: 'https://lh5.googleusercontent.com/p/AF1QipMGZeu88O8uZvFOX9PKug7gz-VRhhiXQ78hAFZU=w408-h306-k-no',
        text: 'Animi it ratione placeat necessitatibus quisquam molestiae obcaecati laudantium?'
      },
      {
        lat: -33.733913,
        lng:  -70.750108,
        title: 'Supermercado',
        image: 'https://lh5.googleusercontent.com/p/AF1QipMGZeu88O8uZvFOX9PKug7gz-VRhhiXQ78hAFZU=w408-h306-k-no',
        text: 'olestiae obcaecati laudantium?'
      },
    ]

    constructor(
      private loadingCtrl: LoadingController
    ){
      this.infoWindowsRef = new google.maps.InfoWindow();
    }



    ngOnInit() {
      this.loadMap();
    }
    //carga de mapa
  async  loadMap(){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const mapEle: HTMLElement = document.getElementById('map');
      const marker = this.markers[0];
      this.mapRef = new google.maps.Map(mapEle, {
        center: {lat: marker.lat, lng: marker.lng },
        zoom: 16
      });
  
      google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
        loading.dismiss();
        this.loadMarkers();
      });
    }   
    //genera el marcador
    private addMaker(itemMarker: Marker) {
      const marker = new google.maps.Marker({
        position: { lat: itemMarker.lat, lng: itemMarker.lng },
        map: this.mapRef,
        title: itemMarker.title
      });
      return marker;
    }
    //carga el marcador
    private loadMarkers(){
      this.markers.forEach(marker => {
        const markerObj = this.addMaker(marker);
        marker.markerObj = markerObj;
      });
    }
    //muestra el lugar del punto
  async onSlideDidChange(){
    const currentSlide = await this.slides.getActiveIndex();
    const marker = this.markers[currentSlide];
    this.mapRef.panTo({lat: marker.lat, lng: marker.lng});
  
    //genera el mensaje
  const markerObj = marker.markerObj;
  this.infoWindowsRef.setContent(marker.title);
  this.infoWindowsRef.open(this.mapRef, markerObj);
  }
} 

     