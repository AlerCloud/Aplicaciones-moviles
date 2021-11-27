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
          duration: 500
        });
        await loading.present();

      }
    
      async presentAlertMultipleButtons() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Escribe tu correo para recuperar tu contraseña.',
          inputs:[
            {
              name: 'txtNombre',
              type: 'email',
              placeholder: 'Email'
            }
          ],
          
          buttons: ['Cancelar', 'Ok']
        });
    
        await alert.present();
      }


}