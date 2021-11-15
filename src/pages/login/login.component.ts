import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { __await } from "tslib";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 


    constructor(private loadingCtrl: LoadingController , public alertController: AlertController){}

    ngOnInit(){
        this.presentLoading();
    }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
          message: 'Espere un momento...',
          duration: 1000
        });
        await loading.present();

      }
    
      
      async presentAlertMultipleButtons() {
         const alert = await this.alertController.create({
           cssClass: 'my-custom-class',
           header: '¿Quiere permitir acceso a la camara del dispositivo?',      
           buttons: ['Cancelar', 'Ok']
         });
     
         await alert.present();
       }
  


}