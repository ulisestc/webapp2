import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {

  constructor(
    private router: Router){
  }

  public goInstrucciones(){
    this.router.navigate(['instrucciones']);
  }

  public goJuego(){
    this.router.navigate(['juego']);
  }

  public goLentes(){
    this.router.navigate(['lentes']);
  }
}
