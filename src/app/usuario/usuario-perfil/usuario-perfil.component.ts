import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario-model/usuario';
import { UsuarioService } from 'src/app/service/usuario-service/usuario.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss']
})
export class UsuarioPerfilComponent {
  usuario: Usuario = new Usuario();
  usuarioService = inject(UsuarioService);
  activeRoute = inject(ActivatedRoute);

  constructor() {
    this.activeRoute.paramMap.subscribe(params => {
      this.usuario.id = Number(params.get("id"));
    });

    this.findById(this.usuario.id);
  }

  findById(id: number){
    this.usuarioService.findById(id).subscribe({
      next: usuario => { this.usuario = usuario },
      error: erro => console.log(erro)
    });
  }
}