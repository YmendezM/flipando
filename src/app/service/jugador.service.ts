import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Jugador } from '../interfaces/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor(private http: HttpClient) {}

  getAllJugador(){
    
    const path = 'localhost:2003/v1/jugadores';
    return this.http.get<Jugador[]>(path);

  }

}
