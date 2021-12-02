import { Component, OnInit } from "@angular/core";
import { DatosService } from "src/app/servicio/datos.service";

 @Component({
     selector: 'welcome',
     templateUrl: './welcome.component.html',
     styleUrls: ['./welcome.component.css' ]
 })

 export class WelcomeComponent implements OnInit {
     name: string;

     ngOnInit(){
        
     }
     
     
 }
