import { Component } from "@angular/core";
import { AlertController, MenuController } from "@ionic/angular";
import { __await } from "tslib";

 @Component({
     selector: 'main',
     templateUrl: './main.component.html',
     styleUrls: ['./main.component.css' ]
 })
 

 export class MainComponent {
     

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



   }  
      
    