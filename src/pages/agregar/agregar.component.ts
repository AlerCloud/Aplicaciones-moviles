import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';
import { IDato } from '../../app/dato/interfaz/IDato';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  public dato: IDato = {
    nombre: '',
    email: '',
    contrasena: '',
    edad:''

  }
  private servicio: DatosService
  constructor(datoServicio: DatosService) {
    this.servicio = datoServicio;
   }



    public agregarDato(){
    console.log(this.dato);
    this.servicio.agregarDato(this.dato)
    .subscribe( respuesta =>{
      console.log(respuesta);
    })
  }

  ngOnInit() {
    this.servicio.ListarDatos()
    .subscribe( respuesta => {
      console.log(respuesta)

    })
  }

}