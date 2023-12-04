import { Component, inject } from '@angular/core';
import { Usuario } from 'src/app/models/usuario-model/usuario';
import { LoginService } from 'src/app/service/login-service/login.service';
import { UsuarioService } from 'src/app/service/usuario-service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  loginService = inject(LoginService);
  usuarioService = inject(UsuarioService);
  usuario!: Usuario;

  constructor() {
    this.usuario = new Usuario();

    if(localStorage.getItem("token")){
      this.instaciarUsuario();
    }
  }

  instaciarUsuario(){
    this.usuario.id = this.loginService.getId();
    this.usuario.nome = this.loginService.getNome();
    this.usuario.role = this.loginService.getRole();
  }

  getUsuarioBackend(userId: number) {
    this.usuarioService.findById(userId).subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario;
      },
      (error) => {
        console.error('Erro ao buscar id no banco de dados!', error);
      }
    );
  }
}