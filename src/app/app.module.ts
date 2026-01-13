import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/views/login/login.component';
import { ListadoComponent } from './features/reuniones/views/listado/listado.component';
import { DetalleComponent } from './features/reuniones/views/detalle/detalle.component';
import { DesplegableComponent } from './shared/components/layout/desplegable/desplegable.component';
import { DashboardAlumnoComponent } from './features/dashboard/views/dashboard-alumno/dashboard-alumno.component';
import { AsignaturasComponent } from './features/selectorAsignatura/views/asignaturas/asignaturas.component';
import { CalendarioComponent } from './features/calendario/views/calendario/calendario.component';
import { ReunionesComponent } from './features/reuniones/views/reuniones.component';
import { ActasComponent } from './features/actasPasadas/actas-pasadas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    DetalleComponent,
    DesplegableComponent,
    DashboardAlumnoComponent,
    AsignaturasComponent,
    CalendarioComponent,
    ReunionesComponent,
    ActasComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
