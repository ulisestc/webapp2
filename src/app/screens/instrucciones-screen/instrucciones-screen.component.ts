import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones-screen',
  templateUrl: './instrucciones-screen.component.html',
  styleUrls: ['./instrucciones-screen.component.scss']
})
export class InstruccionesScreenComponent implements OnInit{

  public isLoading: boolean = false;
  public lista_puntos: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerPuntaje();
  }

  public jugarAhora(){
    this.router.navigate(['lentes'])
  }

  public obtenerPuntaje(){
    this.lista_puntos = [
      {
        "accion": "Código redimido",
        "puntos": 1000,
      },
      {
        "accion": "Jugar sin chocar de 0 a 30 segundos",
        "puntos": 100,
      },
      {
        "accion": "Jugar sin chocar de 31 a 60 segundos",
        "puntos": 200,
      },
      {
        "accion": "Jugar sin chocar de 61 a 90 segundos",
        "puntos": 300,
      },
      {
        "accion": "Jugar sin chocar de 91 a 120 segundos",
        "puntos": 400,
      }
    ];
  }

  public isMobile(tipo: number){
    switch(tipo){
      case 1:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos";
        }
        break;
      case 2:
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
          return "style-mobile";
        }else{
          return "interior-codigos-registrados";
        }
        break;
    }
  }

}