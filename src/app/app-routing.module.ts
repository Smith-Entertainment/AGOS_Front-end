import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RecuperaSenhaComponent } from './components/sistema/recupera-senha/recupera-senha.component';
import { ObraFormComponent } from './components/obra-group/obra-form/obra-form.component';

const routes: Routes = [
  {path: "", redirectTo: "list/obra", pathMatch: "full"},
  {path: "list/:type", component: ListComponent},
  {path:"login", component: LoginComponent},
  {path:"recuperar-senha", component: RecuperaSenhaComponent},
  {path:"obra/:id", component: ObraPerfilComponent},
  {path: 'obra/form/:id', component: ObraFormComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
