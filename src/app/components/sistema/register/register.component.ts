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

  save() {
    if (this.user.id == null) {
      this.post();
    } else this.put();
  }

  post() {
    this.service.create(this.user).subscribe(
      data =>{
        console.log("sucesso");
      }, error =>{
        console.log("erro");
      }
    )
  }
  put() {
    this.service.update(this.user.id, this.user).subscribe(
      data =>{
        console.log("sucesso");
      }, error =>{
        console.log(error.error);
      }
    )
   }

}
