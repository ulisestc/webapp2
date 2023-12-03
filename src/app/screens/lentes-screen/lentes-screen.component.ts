import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lentes-screen',
  templateUrl: './lentes-screen.component.html',
  styleUrls: ['./lentes-screen.component.scss']
})
export class LentesScreenComponent implements OnInit{

  public isLoading: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  omitir(){
    this.router.navigate(['juego'])
  }

  public usarLentes(){
    this.router.navigate(['juego'])
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }
}