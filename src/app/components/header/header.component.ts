import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  usuario: Usuario = new Usuario();

  isLoged: boolean = true;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    const userId = 1; // Substitua pelo ID do usuário desejado
    this.getUsuarioBackend(userId);
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

  checkLogin(){
    this.isLoged = !this.isLoged; //Toggle

    if(this.isLoged == true){}
    this.usuario = this.usuario;
  }

}
