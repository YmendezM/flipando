import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { stringify } from 'querystring';
import { ReturnStatement } from '@angular/compiler';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth:AngularFireAuth) { }
  
  loginEmail(email, password){
     return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
     .then((response)=>{
       alert('User logueado');
       console.log();
     }).catch((error)=>{
       alert('Error al logear');
       console.log(error);
     });
  }

  registerEmail(email, password){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((response)=>{
      alert('Usuario registrado');
      console.log(response);
    }).catch((error)=>{
      alert('User no se pudo registrar');
      console.log(error);
    });    
  }

  getStatus(){
    return this.angularFireAuth.authState;
  }

  logOut(){
    return this.angularFireAuth.auth.signOut();
  }
    
 /* public login(email, password){
    console.log("Ysrael Mendez");
      }
  public register(email, password){
    console.log("Ely Redondo");
  }*/
}
