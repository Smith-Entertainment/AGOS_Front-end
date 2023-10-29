import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnvioListComponent } from './components/envio/envio-list/envio-list.component';
import { EnvioDetailsComponent } from './components/envio/envio-details/envio-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvioListComponent,
    EnvioDetailsComponent
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
