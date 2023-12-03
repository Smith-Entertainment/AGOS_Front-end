import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RecuperaSenhaComponent } from './components/sistema/recupera-senha/recupera-senha.component';
import { ListComponent } from './components/list/list.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';
import { ObraFormComponent } from './components/obra-group/obra-form/obra-form.component';
import { ObraDetailsComponent } from './components/Obra/obra-details/obra-details.component';
import { ObraListComponent } from './components/Obra/obra-list/obra-list.component';
import { RecuperaSenhaDetailsComponent } from './components/sistema/recupera-senha-details/recupera-senha-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObraDetailsComponent,
    ObraListComponent,
    LoginComponent,
    RecuperaSenhaComponent,
    ListComponent,
    ObraPerfilComponent,
    ObraFormComponent,
    ObraPerfilComponent,
    RecuperaSenhaDetailsComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
