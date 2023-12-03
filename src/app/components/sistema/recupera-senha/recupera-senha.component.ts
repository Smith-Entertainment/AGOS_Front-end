import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.component.html',
  styleUrls: ['./recupera-senha.component.scss']
})
export class RecuperaSenhaComponent {

  roteador = inject(Router)

  recuperarSenha(){

    this.roteador.navigate(["recupera-senha-details"])
  }

  voltarTelaAnterior(){
    this.roteador.navigate(["/login"])
  }


}
