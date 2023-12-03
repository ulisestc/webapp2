import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-juego-terminado-screen',
  templateUrl: './juego-terminado-screen.component.html',
  styleUrls: ['./juego-terminado-screen.component.scss']
})
export class JuegoTerminadoScreenComponent {
  constructor(
    private router: Router
  ) { }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

  public goHome(){
    this.router.navigate(['home']);
  }
}

