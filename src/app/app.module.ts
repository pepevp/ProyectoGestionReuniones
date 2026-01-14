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
import { DashboardProfesorComponent } from './features/dashboard-profesor/dashboard-profesor.component';
import { ProximasReunionesProfesorComponent } from './features/proximas-reuniones-profesor/proximas-reuniones-profesor.component';
import { NotificacionesProfesorComponent } from './features/notificaciones-profesor/notificaciones-profesor.component';
import { ReunionesPasadasProfesorComponent } from './features/reuniones-pasadas-profesor/reuniones-pasadas-profesor.component';

import { CalendarioProfesorComponent } from './features/calendario-profesor/calendario-profesor.component';
import { ActaPasadaProfesorComponent } from './features/acta-pasada-profesor/acta-pasada-profesor.component';


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
    ActasComponent,
    DashboardProfesorComponent,
    ReunionesPasadasProfesorComponent
    
    
    // CalendarioProfesorComponent <-- ELIMINADO DE AQUÍ
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarioProfesorComponent,
    NotificacionesProfesorComponent,
    ProximasReunionesProfesorComponent,
    ActaPasadaProfesorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }