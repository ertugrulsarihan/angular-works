import { Component, Host } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
  myNumber: number = 100;
  message: string = "";  
  loginName: string = "";
  password: string = "";

  loginControl() {
    this.message = "Hoşgeldiniz, ";
    if(this.loginName === "" ||this.password === ""){
      this.message = this.message + "Lütfen Kullanıcı adı veya şifre giriniz."
    }else{
      this.message = "Hoşgeldin " + this.loginName + " Şifreniz: " + this.password;
    }
  }
}
