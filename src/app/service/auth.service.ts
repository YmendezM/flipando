import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { stringify } from 'querystring';
import { ReturnStatement } from '@angular/compiler';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth:AngularFireAuth, private router:Router) {
    this.getStatus();
   }
  
  loginEmail(email, password){
     return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
     .then((response)=>{
      alert('User logueado');
      console.log(response);
      this.router.navigate(['user-profile']);
    }).catch((error)=>{
      alert('Error al logear');
      console.log(error);
      this.router.navigate(['login']);
    });
  }

  registerEmail(email, password){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((response)=>{
      alert('Usuario registrado');
      console.log(response);
      this.router.navigate(['login']);
    }).catch((error)=>{
      alert('User no se pudo registrar');
      console.log(error);
      this.router.navigate(['register']);
    });     
  }

  getStatus(){
    return this.angularFireAuth.authState;
  }

  logOut(){
    this.angularFireAuth.auth.signOut();
    alert('Session Terminada');
    this.router.navigate(['login']);
  }

  getUser(){
    return this.angularFireAuth.auth;
  }

    
 /* public login(email, password){
    console.log("Ysrael Mendez");
      }
  public register(email, password){
    console.log("Ely Redondo");
  }*/
}
