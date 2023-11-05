import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnvioListComponent } from './components/envio/envio-list/envio-list.component';
import { EnvioDetailsComponent } from './components/envio/envio-details/envio-details.component';
import { ObraDetailsComponent } from './components/obra/obra-details/obra-details.component';
import { ObraListComponent } from './components/obra/obra-list/obra-list.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RecuperaSenhaComponent } from './components/sistema/recupera-senha/recupera-senha.component';


@NgModule({
  declarations: [
    AppComponent,
    EnvioListComponent,
    EnvioDetailsComponent,
    ObraDetailsComponent,
    ObraListComponent,
    LoginComponent,
    RecuperaSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
