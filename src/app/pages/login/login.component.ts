import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loguear:any = {};
  //operation: string = 'login';
  //email: string = null;
  //password: string = null;
  constructor(private authService:AuthService) {
    //this.authService.login('email','password');
  }

  ngOnInit() {
  }

  login(){
    this.authService.loginEmail(this.loguear.email, this.loguear.password);
    
  }
  ngOnDestroy() {
  }

}
