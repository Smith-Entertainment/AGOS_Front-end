import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario-model/usuario';
import { UsuarioService } from 'src/app/service/usuario-service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(){
    this. findById();
  }


  @Input() user: Usuario = new Usuario();
  @Output() retorno = new EventEmitter<Usuario>();

  service = inject(UsuarioService);
  route = inject(ActivatedRoute);
  roteador = inject(Router)
  modalService = inject(NgbModal);

  messagem!: string;
  success: boolean = false
  danger: boolean = false

  save() {
    if (this.user.id == null) {
      this.post();
    } else this.put();
  }
  clearFormFields(formFields: any): void {
    Object.keys(formFields).forEach(key => formFields[key] = null);
  }
  
  post() {
    this.service.create(this.user).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        if (error.status < 400) {
          console.log("Sucesso");
          this.success = true;
          this.messagem = "Usuário cadastrado com sucesso!";
          setTimeout(() => {
            this.success = false;
            this.clearFormFields(this.user);
          }, 2500);
        }
        else {
          console.log("Erro");
          this.danger = true;
          this.messagem = error.error || "Ocorreu um erro desconhecido.";
          setTimeout(() => {
            this.danger = false;
          }, 2500);
        }
      }
    );
  }
  open(modal: any) {
    this.modalService.open(modal, { size:  'lg'});
  }

  put() {
    this.service.update(this.user.id, this.user).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        if (error.status < 400) {
          console.log("Sucesso");
          this.success = true;
          this.messagem = "Usuário Atualizado com sucesso!";
          setTimeout(() => {
            this.success = false;
          }, 2500);
        }
        else {
          console.log("Erro");
          this.danger = true;
          this.messagem = error.error || "Ocorreu um erro desconhecido.";
          setTimeout(() => {
            this.danger = false;
          }, 2500);
        }
      }
    );
  }

  findById() {
    this.route.params.subscribe(params => {
      const usuarioId = params['id'];
      this.service.findById(usuarioId).subscribe(
        response => {
          this.user = response;
        });
    });
  }

}