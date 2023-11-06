import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';
import { ObraFormComponent } from './components/obra-group/obra-form/obra-form.component';

const routes: Routes = [
  {path: "", redirectTo: "list/obra", pathMatch: "full"},
  {path: "list/:type", component: ListComponent},
  {path:"obra/:id", component: ObraPerfilComponent},
  {path: 'obra/form/:id', component: ObraFormComponent}

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
