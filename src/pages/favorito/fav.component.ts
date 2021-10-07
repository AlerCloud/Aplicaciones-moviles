import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { __await } from "tslib";






 @Component({
     selector: 'fav',
     templateUrl: './fav.component.html',
     styleUrls: ['./fav.component.css' ]
 })

 export class FavComponent {

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
     