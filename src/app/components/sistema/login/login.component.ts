import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login-model/login';
import { LoginService } from 'src/app/service/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = new Login();

  loginService  = inject(LoginService);
  roteador = inject(Router);

  constructor(){
    this.loginService.removeToken();
  }

  recuperarSenha(){

    this.roteador.navigate(["recuperar-senha"])
  }
  register(){

    this.roteador.navigate(["register"])
  }


  logar() {
    console.log(this.login);
    

    this.loginService.logar(this.login).subscribe({
      next: usuario => { 
        console.log(usuario);
        this.loginService.addToken(usuario.token);
        this.roteador.navigate(['list/obra']);
      },
      error: erro => {
        alert('erro, Observe o erro no console!');
        console.error(erro);
        console.log('nao foi')
      }
    });

  }



 
}
