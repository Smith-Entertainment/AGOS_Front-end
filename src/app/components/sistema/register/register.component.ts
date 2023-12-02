import { Component, Input, inject } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Input() user: Usuario = new Usuario();

  service = inject(UsuarioService);
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

  put() {
    this.service.update(this.user.id, this.user).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        if (error.status < 400) {
          console.log("Sucesso");
          this.success = true;
          this.messagem = "Usuário cadastrado com sucesso!";
          setTimeout(() => {
            this.clearFormFields(this.user);
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

}