import { Component } from '@angular/core';

@Component({
  selector: 'app-terminos-y-condiciones-screen',
  templateUrl: './terminos-y-condiciones-screen.component.html',
  styleUrls: ['./terminos-y-condiciones-screen.component.scss']
})
export class TerminosYCondicionesScreenComponent {
  constructor() { }

  ngOnInit(): void {
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}
