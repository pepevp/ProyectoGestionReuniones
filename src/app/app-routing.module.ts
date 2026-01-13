import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesplegableComponent } from './shared/components/layout/desplegable/desplegable.component';
import { DashboardAlumnoComponent } from './features/dashboard/views/dashboard-alumno/dashboard-alumno.component';
import { AsignaturasComponent } from './features/selectorAsignatura/views/asignaturas/asignaturas.component';
import { CalendarioComponent } from './features/calendario/views/calendario/calendario.component';
import { ReunionesComponent } from './features/reuniones/views/reuniones.component';
import { ActasComponent } from './features/actasPasadas/actas-pasadas.component';


const routes: Routes = [
  {
    path: '',
    component: DesplegableComponent,
    children: [
      { path: '', component: DashboardAlumnoComponent },
      { path: 'dashboard', component: DashboardAlumnoComponent },
      { path: 'asignaturas', component: AsignaturasComponent },
      { path: 'calendario', component: CalendarioComponent },
      { path: 'reuniones', component: ReunionesComponent },
      { path: 'actas', component: ActasComponent }/*,
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    */]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
