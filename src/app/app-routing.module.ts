import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvioListComponent } from './components/envio/envio-list/envio-list.component';
import { EnvioDetailsComponent } from './components/envio/envio-details/envio-details.component';
import { LoginComponent } from './components/sistema/login/login.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component: LoginComponent},
  {path:"envios", component: EnvioListComponent},
  {path:"envios/details", component: EnvioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
