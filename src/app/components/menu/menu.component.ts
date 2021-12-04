import { Component, OnInit } from '@angular/core';
import { IDato } from 'src/app/dato/interfaz/IDato';
import { DatosService } from 'src/app/servicio/datos.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public asd: Array<IDato> = [];
  constructor(private datosServicio: DatosService, public alertController: AlertController){      
  }

  ngOnInit(): void {
      this.listarasd();
  }
  public listarasd(){
      this.datosServicio.ListarDatos()
      .subscribe( (respuesta: Array<IDato>) => {
          this.asd = respuesta;
          
      })
  }
  //restricciones de ubicacion
    async presentAlertMultipleButtons() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Actualmente Recyclop se limita a mostrar puntos solo en Buin y San Bernardo.',
         
          
          buttons: ['Ok']
        });
    
        await alert.present();
      }
    
      async presentAlertMultipleButtons2() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'El uso de la aplicacion es para uso adecuado, el sistema de pedir puntos siempre sera monitoreado y comprobado por los encargados con la idea de evitar mal uso del mismo.',
          
          
          buttons: ['Cancelar', 'Ok']
        });
    
        await alert.present();
      }

      async presentAlertMultipleButtons3() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Escribe la latitud y longitud del punto sugerido.',
          inputs:[
            {
              name: 'txtNombre',
              type: 'email',
              placeholder: 'lat'
            },
            {
              name: 'txtNombre',
              type: 'email',
              placeholder: 'lng'
            },
            {
              name: 'txtNombre',
              type: 'email',
              placeholder: 'Nombre del punto'
            }
          ],
          
          buttons: ['Cancelar', 'Enviar']
        });
    
        await alert.present();
      }
}
