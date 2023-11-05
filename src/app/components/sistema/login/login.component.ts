import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  roteador = inject(Router)

  recuperarSenha(){

    this.roteador.navigate(["recuperar-senha"])
  }

}
