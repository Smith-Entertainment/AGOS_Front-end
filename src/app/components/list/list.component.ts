import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Obra } from 'src/app/models/obra';
import { Usuario } from 'src/app/models/usuario';
import { ObraService } from 'src/app/service/obra.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  obraService = inject(ObraService);
  usuarioService = inject(UsuarioService);
  route = inject(Router);
  activeRoute = inject(ActivatedRoute);

  listType!: string | null;

  obras: Array<Obra> = new Array<Obra>();
  usuarios: Array<Usuario> = new Array<Usuario>();

  constructor(){
    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.atualizarRota();
      }});

    this.atualizarRota();
  }

  atualizarRota(){
    this.activeRoute.paramMap.subscribe(params => {
      this.listType = params.get("type");
    })

    if(this.listType == "obra"){
      this.usuarios = new Array<Usuario>();
      this.findAllObras();
    }

    if(this.listType == "usuario"){
      this.obras = new Array<Obra>();
      this.findAllUsuarios();
    }
  }

  findAllObras(){
    this.obraService.findAll().subscribe({
      next: response => {this.obras = response},
      error: erro => console.log(erro)
    });
  }

  findAllUsuarios(){
    this.usuarioService.findAll().subscribe({
      next: response => {this.usuarios = response},
      error: erro => console.log(erro)
    });
  }
}