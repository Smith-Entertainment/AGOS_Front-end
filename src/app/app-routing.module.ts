import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { EnvioDetailsComponent } from './components/envio/envio-details/envio-details.component';
import { EnvioListComponent } from './components/envio/envio-list/envio-list.component';

const routes: Routes = [
  {path: "obras/list", component: ListComponent},
  {path: "obras/form", component: EnvioDetailsComponent},
  {path: "obras/profile", component: EnvioListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
