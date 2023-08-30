import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ""
  password: string = ""
  validations: string =""

  constructor(private router: Router){}

  login(){
    if(this.username == "admin" && this.password == "admin123"){
      this.router.navigate(["/admin"])
    }else{
      this.validations="Invalid credentials"
    }
    
  }
}
