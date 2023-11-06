import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';

const routes: Routes = [
  {path: "", redirectTo: "list/obra", pathMatch: "full"},
  {path: "list/:type", component: ListComponent},
  {path:"obra/:id", component: ObraPerfilComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
