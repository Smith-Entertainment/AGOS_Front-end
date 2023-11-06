import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObraFormComponent } from './components/obra-group/obra-form/obra-form.component';
import { IndexComponent } from './components/layout/index/index.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';

const routes: Routes = [
  {path:"", component:ObraPerfilComponent},
  {path: "AGOS", component:IndexComponent, children:[
    {path:"obra/:id", component: ObraPerfilComponent},
    {path: 'obra/form', component: ObraFormComponent}
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
