import { Component, OnInit } from '@angular/core';
import { IDato } from 'src/app/dato/interfaz/IDato';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public asd: Array<IDato> = [];
  constructor(private datosServicio: DatosService){      
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
}
