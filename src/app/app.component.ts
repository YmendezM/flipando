import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argon-dashboard-angular';
  loggenIn = false;
  constructor(private authService:AuthService){
    this.authService.getStatus()
    .subscribe((result)=>{
      if(result && result.uid){
        this.loggenIn = true;
      } else {
        this.loggenIn = false;
      }
    }, (error)=>{
      this.loggenIn = false;
    });
  }
}
