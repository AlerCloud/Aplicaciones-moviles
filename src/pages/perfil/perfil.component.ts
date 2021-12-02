import { Component, OnInit } from "@angular/core";
import { IDato } from "src/app/dato/interfaz/IDato";
import { DatosService } from "src/app/servicio/datos.service";

 @Component({
     selector: 'perfil',
     templateUrl: './perfil.component.html',
     styleUrls: ['./perfil.component.css' ]
 })

 export class PerfilComponent implements OnInit {
     
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