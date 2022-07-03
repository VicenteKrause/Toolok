import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http'
import { Observable, observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MicroService {
  servidor = "http://localhost:9000";
  constructor(private servicio:HttpClient) { }

  obtenerMicros():Observable<any>{
    return this.servicio.get(`${this.servidor}/api/micros`);
  }
}
