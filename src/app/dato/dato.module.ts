import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientJsonpModule} from '@angular/common/http'

import { DatoRoutingModule } from './dato-routing.module';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../servicio/datos.service';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    DatoRoutingModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers:[
  DatosService
]
})
export class DatoModule { }
