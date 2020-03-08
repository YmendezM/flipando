import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public login(email, password){
    console.log("Ysrael Mendez");
      }
  public register(email, password){
    console.log("Ely Redondo");
  }
}
