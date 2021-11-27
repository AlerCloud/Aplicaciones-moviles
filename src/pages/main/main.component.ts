import { getCurrencySymbol } from "@angular/common";
import { Component, OnInit } from "@angular/core";

import { AlertController, MenuController } from "@ionic/angular";



import { bindCallback } from "rxjs";
import { __await } from "tslib";


 @Component({
     selector: 'main',
     templateUrl: './main.component.html',
     styleUrls: ['./main.component.css' ]
 })
 

 export class MainComponent implements OnInit {

 
     

    constructor(public alertController: AlertController, private menu: MenuController ){

    }
    
    async presentAlertMultipleButtons() {
       const alert = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: '¿Quiere permitir acceso a la camara de dispositivo?',      
         buttons: ['Cancelar', 'Ok']
       });
   
       await alert.present();
     }

     async AlertMultipleButtons() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Para cualquier consulta contactar con el programador.',      
          buttons: ['Ok']
        });
    
        await alert.present();
      }

      toggleMenu(){
        this.menu.toggle();

      
      
}
  
  public zoom =18;
  public opcionesDeMapa : google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    maxZoom: 18,
    minZoom: 6,
    clickableIcons: true,
    
    
    


  };

  public marcas = [];
  public miPosicion: google.maps.LatLngLiteral = {
    lat:-0, 
    lng:-0,
    
  };
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
  }
 

  public imagen =
  "https://img.icons8.com/officel/60/000000/trash.png";
  public crearMarca(evento: google.maps.MapMouseEvent){
    const posicion: google.maps.LatLngLiteral = evento.latLng.toJSON();
    this.marcas.push({
      posicion: posicion,
      etiqueta: {
        color: '#247A83',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '0.5px',  
        text: "Punto Ecologico" + this.marcas.length       
      },
      opciones: {
        icon: this.imagen,
        Animation: google.maps.Animation.DROP
              
      }

      
    
    });
    }

    
  
}  
      
    