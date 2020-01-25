import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Modulo Personalizado
import { PrincipalModule } from './principal/principal.module';
import { AdministracionModule } from './administracion/administracion.module';
// Servicios
import { ServiceModule } from './services/service.module';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AdministracionModule,
    AppRoutingModule,
    ServiceModule,
    FormsModule,
    PrincipalModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
