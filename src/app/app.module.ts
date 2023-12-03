import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { RecuperaSenhaComponent } from './components/sistema/recupera-senha/recupera-senha.component';
import { ListComponent } from './components/list/list.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';
import { ObraFormComponent } from './components/Obra/obra-form/obra-form.component';
import { RegisterComponent } from './components/sistema/register/register.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { UsuarioPerfilComponent } from './components/usuario-perfil/usuario-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RecuperaSenhaComponent,
    ListComponent,
    ObraPerfilComponent,
    ObraFormComponent,
    ObraPerfilComponent,
    RegisterComponent,
    UsuarioPerfilComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxMaskDirective,
    ReactiveFormsModule
  ],
  providers: [
    provideNgxMask({  })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
