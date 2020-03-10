import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registro:any = {};
  constructor(private authService:AuthService) {
   }

   public register(){
    this.authService.registerEmail(this.registro.email, this.registro.password);
   }

  ngOnInit() {
  }

}
