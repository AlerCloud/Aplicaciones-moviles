import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { __await } from "tslib";
import { DatosService } from "src/app/servicio/datos.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 
  public nombre ="";
  public contrasena ="";



    constructor(private loadingCtrl: LoadingController , public alertController: AlertController, private auth: DatosService){}

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

      public iniciarSesion(){
        this.auth.iniciarSesion(this.nombre,this.contrasena)
        .then( resultado =>{
          if(resultado){
            alert("Te damos la bienvenida "+ this.auth.usuarioLogeado.nombre);
            location.href = "welcome";
          }
          else{
            alert("usuario y contraseña incorrecto, intentelo denuevo.");
            
          }
        }
          )
      }
}