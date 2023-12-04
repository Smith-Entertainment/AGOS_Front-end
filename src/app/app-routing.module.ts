import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RecuperaSenhaComponent } from './components/sistema/recupera-senha/recupera-senha.component';
import { ObraFormComponent } from './components/Obra/obra-form/obra-form.component';
import { RegisterComponent } from './components/sistema/register/register.component';
import { UsuarioPerfilComponent } from './components/usuario/usuario-perfil/usuario-perfil.component';

const routes: Routes = [
  {path: "", redirectTo: "list/obra", pathMatch: "full"},
  {path: "list/:type", component: ListComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"recuperar-senha", component: RecuperaSenhaComponent},
  {path:"obra/:id", component: ObraPerfilComponent},
  {path: 'obra/form/:id', component: ObraFormComponent},
  {path: 'usuario/:id', component: UsuarioPerfilComponent},
  {path: 'usuario/form/:id', component: RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }