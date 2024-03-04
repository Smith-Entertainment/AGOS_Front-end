import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario-model/usuario';
import { LoginService } from 'src/app/service/login-service/login.service';
import { UsuarioService } from 'src/app/service/usuario-service/usuario.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss']
})
export class UsuarioPerfilComponent {
  modalService = inject(NgbModal);
  usuarioService = inject(UsuarioService);
  loginService = inject(LoginService);
  activeRoute = inject(ActivatedRoute);

  usuario: Usuario = new Usuario();
  usuarioAdmin!: boolean;

  constructor() {
    this.activeRoute.paramMap.subscribe(params => {
      this.usuario.id = Number(params.get("id"));
    });

    this.usuarioAdmin = this.loginService.hasPermission("ADMIN")

    this.findById(this.usuario.id);
  }

  findById(id: number){
    this.usuarioService.findById(id).subscribe({
      next: usuario => { 
        this.usuario = usuario
        this.usuario.role = this.loginService.getRole();
        console.log(this.usuario.role)
      },
      error: erro => console.log(erro)
    });
  }

  salvar(){
    this.usuarioService.update(this.usuario.id, this.usuario).subscribe({
      next: response => { console.log(response) },
      error: erro => { console.log(erro) }
    })

    this.modalService.dismissAll();
  }

  openModal(content: any) {
		this.modalService.open(content, { centered: true, size: "md" });
	}
}