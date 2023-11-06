import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObraFormComponent } from './components/obra-group/obra-form/obra-form.component';


const routes: Routes = [
 {path: 'obra/form', component: ObraFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
