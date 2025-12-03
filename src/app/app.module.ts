import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/views/login/login.component';
import { HomeComponent } from './features/dashboard/views/home/home.component';
import { ListadoComponent } from './features/reuniones/views/listado/listado.component';
import { DetalleComponent } from './features/reuniones/views/detalle/detalle.component';
import { PerfilComponent } from './features/usuarios/views/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListadoComponent,
    DetalleComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
