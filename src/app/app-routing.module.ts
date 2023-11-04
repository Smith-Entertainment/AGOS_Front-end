import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';

const routes: Routes = [
  {path:"", component:IndexComponent},
  {path: "AGOS", component:IndexComponent, children:[
    {path:"obra", component: ObraPerfilComponent}
]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
