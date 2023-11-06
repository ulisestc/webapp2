import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit{

  public username: string = "";
  public password: string = "";
  public errors: any = {}

  public hide_1: boolean = false;
  public inputType_1: string = 'password';

  constructor() {}

  ngOnInit(): void {

  }

  public login(){

  }

  public recuperarPwd(){
    
  }

  public goRegistro(){
    //this.router.navigate(["registro"]);
  }
  
  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  } 
}
