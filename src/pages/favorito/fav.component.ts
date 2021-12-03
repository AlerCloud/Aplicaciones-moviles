import { Component, OnInit, ViewChild } from "@angular/core";
import { Marker } from 'src/app/dato/interfaz/IMarker'
import { LoadingController, IonSlides, IonIcon, AnimationController } from "@ionic/angular";
import { AlertController, MenuController } from "@ionic/angular";
import { GoogleMap } from "@angular/google-maps";


declare var google;

interface YO {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}


 @Component({
     selector: 'fav',
     templateUrl: './fav.component.html',
     styleUrls: ['./fav.component.scss' ]
 })

 export class FavComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
    //variables
    public IconoPunto = "https://img.icons8.com/officel/50/000000/trash.png";
    public IconoI= "https://img.icons8.com/color/60/000000/walking--v2.png";
    public marcas = [];
    mapRef = null;
    infoWindowsRef = null;
    public miPosicion: google.maps.LatLngLiteral = {
      lat:-0, 
      lng:-0,
      
    };
  

  
    
    constructor(
      private loadingCtrl: LoadingController,public alertController: AlertController, private menu: MenuController
    ){
      this.infoWindowsRef = new google.maps.InfoWindow();
    }



    ngOnInit(): void {
      window.navigator.geolocation.getCurrentPosition((posicion) =>{
        
        this.miPosicion = {
          lat: posicion.coords.latitude,
          lng:posicion.coords.longitude,
          
        
        };
  
        this.marcas.push({
          posicion: this.miPosicion,
          
          
          
        });
  
  
      });
      this.loadMap();
    }

    //carga de mapa
  async  loadMap(){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const mapEle: HTMLElement = document.getElementById('map');
      this.mapRef = new google.maps.Map(mapEle, {
        center: this.miPosicion,
        zoom: 15,
        marcador: this.markers
        
      });
  
      google.maps.event.addListenerOnce(this.mapRef, 'idle', () => {
        loading.dismiss();
        this.loadMarkers();
        const marker = {
          position: 
            this.miPosicion,        
          title: 'Yo',
          
        }
        this.addMarkerYo(marker);
      });
    }   
    //genera el marcador
    private addMaker(itemMarker: Marker) {
      const marker = new google.maps.Marker({
        position: { lat: itemMarker.lat, lng: itemMarker.lng },
        map: this.mapRef,
        title: itemMarker.title,
        icon: this.IconoPunto
         
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

  //Mi marca
  addMarkerYo(marker: YO) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.mapRef,
      title: marker.title,
      icon: this.IconoI
    });
  }

//Lugares guardados para que se muenstren en el telefono
  markers: Marker[] = [
    {
      lat: -33.729491,
      lng:  -70.736783,
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

} 

