import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { ObraPerfilComponent } from './components/Obra/obra-perfil/obra-perfil.component';
import { ObraFormComponent } from './components/obra-group/obra-form/obra-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ObraPerfilComponent,
    ObraFormComponent,
    ObraPerfilComponent,
    
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
