import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EnvioListComponent } from './components/envio/envio-list/envio-list.component';
import { EnvioDetailsComponent } from './components/envio/envio-details/envio-details.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { IndexComponent } from './components/layout/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvioListComponent,
    EnvioDetailsComponent,
    ObraPerfilComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
