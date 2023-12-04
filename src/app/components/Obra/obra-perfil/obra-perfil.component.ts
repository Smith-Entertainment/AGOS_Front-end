import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Obra } from 'src/app/models/obra-model/obra';
import { Usuario } from 'src/app/models/usuario-model/usuario';
import { LoginService } from 'src/app/service/login-service/login.service';
import { ObraService } from 'src/app/service/obra-service/obra.service';
import { UsuarioService } from 'src/app/service/usuario-service/usuario.service';

@Component({
  selector: 'app-obra-perfil',
  templateUrl: './obra-perfil.component.html',
  styleUrls: ['./obra-perfil.component.scss']
})
export class ObraPerfilComponent {
  obra!: Obra;
  id!: Usuario;

  usuario!: Usuario; // Corrigido o nome da variável para 'usuario'
  participa: boolean = false;
  loginService = inject(LoginService);
  usuarioService = inject(UsuarioService);

  constructor(
    private obraService: ObraService,
    private route: ActivatedRoute // Injete o ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      const obraId = params['id'];
      this.obraService.findById(obraId).subscribe((data) => {
        console.log(data);
        this.obra = data;
      });
    });
    this.instaciarUsuario();
    this.findById();
    this.participa = this.verificarParticipacao();
  }

  instaciarUsuario() {
    this.id = new Usuario(); // Instancia um novo objeto Usuario
    this.id.id = this.loginService.getId();
  }

  findById() {
    // Corrigido o tipo do parâmetro 'id'
    this.usuarioService.findById(this.id.id).subscribe({
      next: usuario => { this.usuario = usuario; },
      error: erro => console.log(erro)
    });
  }

  verificarParticipacao(): boolean {
    if (this.obra && this.obra.usuarios) {
      const idUsuario = this.loginService.getId();

      const participa = this.obra.usuarios.some(usuario => usuario.id === idUsuario);

      return participa;
    }

    return false;
  }

  participar() {
    // Verifica se o usuário já participa da obra
    if (!this.verificarParticipacao()) {
      // Garante que this.usuario é definido
      if (!this.usuario) {
        console.error('Erro: Usuário não está definido.');
        return;
      }
  
      // Garante que this.usuario.obras é definido
      if (!this.usuario.obras) {
        this.usuario.obras = []; // Inicializa a propriedade 'obras' se ainda não estiver definida
      }
  
      // Adiciona a obra à lista de obras do usuário
      this.usuario.obras.push(this.obra);
  
      // Chama o serviço para atualizar as informações do usuário no backend
      this.usuarioService.update(this.usuario.id,this.usuario).subscribe({
        next: () => {
          // Atualiza a variável 'participa' e realiza outras ações necessárias
          this.participa = true;
          console.log('Usuário participou da obra com sucesso!');
        },
        error: erro => console.log(erro)
      });
    } else {
      console.log('Usuário já participa da obra.');
    }
  }
  
  

  sair() {
  }
}
