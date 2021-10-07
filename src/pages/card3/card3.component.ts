import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { __await } from "tslib";






 @Component({
     selector: 'card3',
     templateUrl: './card3.component.html',
     styleUrls: ['./card3.component.css' ]
 })

 export class Card3Component {

     constructor(public alertController: AlertController){

     }
     async presentAlertMultipleButtons() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Notifica punto inhabilitado',      
          message: 'Se informará de que el punto no se encuentra disponible',
          buttons: ['Cancelar', 'Ok']
        });
    
        await alert.present();
      }

    }     
     
 