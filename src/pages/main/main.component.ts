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
     selector: 'main',
     templateUrl: './main.component.html',
     styleUrls: ['./main.component.css' ]
 })
 

 export class MainComponent implements OnInit {
 
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
        zoom: 13,
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
      lat: -33.732156,
      lng:  -70.748670,
      title: 'Punto verde: Vidrio',
      image: 'http://www.ladiscusion.cl/wp-content/uploads/2021/01/reciclaje-e1609584326170.jpg',
      text: 'Av.Bernardo OHiggins, Buin.'
    },
    {
      lat: -33.725903,
      lng: -70.745371,
      title: 'Punto Verde: Vidrio',
      image: 'http://www.ladiscusion.cl/wp-content/uploads/2021/01/reciclaje-e1609584326170.jpg',
      text: 'Manuel PL. 728, Buin'
    },
    {
      lat: -33.729252,
      lng:  -70.739437,
      title: 'Punto Verde: Vidrio',
      image: 'http://www.ladiscusion.cl/wp-content/uploads/2021/01/reciclaje-e1609584326170.jpg',
      text: 'Manuel Rodríguez 288, Buin'
    },
    {
      lat: -33.728092,
      lng: -70.736867,
      title: 'Punto Verde: Vidrio, Plástico, Metal',
      image: 'https://www.cualestuhuella.cl/files/6000797fd9f07_890x533.jpg',
      text: ' Alcalde Alberto Kumm 24, Buin'
    },
    {
      lat: -33.729723,
      lng:   -70.738285,
      title: 'Punto Verde: Vidrio',
      image: 'http://www.ladiscusion.cl/wp-content/uploads/2021/01/reciclaje-e1609584326170.jpg',
      text: 'Aníbal Pinto 17, Buin'
    },
    {
      lat: -33.733256,
      lng:  -70.729658,
      title: 'Punto Verde: Vidrio',
      image: 'http://www.ladiscusion.cl/wp-content/uploads/2021/01/reciclaje-e1609584326170.jpg',
      text: 'Cno Estación , Buin'
    },
    {
      lat: -33.711221,
      lng:   -70.743504,
      title: 'Punto Verde: Vidrio',
      image: 'http://www.ladiscusion.cl/wp-content/uploads/2021/01/reciclaje-e1609584326170.jpg',
      text: 'Nuestra Ilusión , Buin'
    },
    {
      lat: -33.713566,
      lng:  -70.721907,
      title: 'Punto Verde: Pila, Celular',
      image: 'https://2.bp.blogspot.com/-0LQVBBA_OXM/VzTz5fIWsDI/AAAAAAAAARA/uFdw-Zof81o3LQUI7v_RfjYqONYcYe53gCLcB/w1200-h630-p-k-no-nu/pilas-baterias-foto-blog.jpg',
      text: 'Camino los Tilos 491, Buin'
    },
    {
      lat: -33.668557,
      lng:  -70.739400,
      title: 'Punto Verde: Pila, Celular',
      image: 'https://2.bp.blogspot.com/-0LQVBBA_OXM/VzTz5fIWsDI/AAAAAAAAARA/uFdw-Zof81o3LQUI7v_RfjYqONYcYe53gCLcB/w1200-h630-p-k-no-nu/pilas-baterias-foto-blog.jpg',
      text: 'Eliodoro Yález 1900 , San Bernardo'
    },
    {
      lat: -33.648480,
      lng:  -70.723834,
      title: 'Punto Verde: Papel, Cartón, Plástico',
      image: 'https://www.cualestuhuella.cl/files/6000797fd9f07_890x533.jpg',
      text: 'Calle Mendoza 785 , San Bernardo'
    },
  ]

} 



    
  
 


