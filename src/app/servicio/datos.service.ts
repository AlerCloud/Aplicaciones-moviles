import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { IDato } from '../dato/interfaz/IDato';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
 url: string = "http://localhost:3000/persona";
  private client: HttpClient;
  constructor(moduloHttp: HttpClient) {
    this.client = moduloHttp;
  }

  public ListarDatos(): Observable<Array<IDato>> {
    return this.client.get<Array<IDato>>(this.url);
  }

  public agregarDato(datoNuevo: IDato): Observable<IDato>{
    return this.client.post<IDato>(this.url, JSON.stringify(datoNuevo),{
      headers: {
        "Content-type":"application/json" 
      }
    });
  }



}