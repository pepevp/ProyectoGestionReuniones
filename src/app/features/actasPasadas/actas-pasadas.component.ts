import { Component } from '@angular/core';

interface Meeting {
  date: string;
  subject: string;
  detail: string;
}

@Component({
  selector: 'app-actas',
  templateUrl: './actas-pasadas.component.html',
  styleUrls: ['./actas-pasadas.component.scss']
})
export class ActasComponent {
  meetings: Meeting[] = [
    { date: '24/11/2025', subject: 'Inglés Profesional', detail: 'En esta reunión se llega a un acuerdo con el alumno, la tarea enviada para el día 5 de noviembre será aplazada solamente para el alumno Nicolás Cabello Rodríguez debido a su ausencia por un tema familiar importante.' },
    { date: '20/11/2025', subject: 'IPE', detail: 'En esta reunión se revisaron los avances del proyecto IPE y se acordaron las siguientes acciones...' },
    { date: '12/11/2025', subject: 'Diseño de interfaces', detail: 'Se discutieron los prototipos de diseño de interfaces y se asignaron tareas de mejora al equipo de UX/UI.' },
    { date: '06/11/2025', subject: 'Proyecto de DAW', detail: 'Se revisaron las entregas del proyecto de DAW y se corrigieron errores encontrados en las funcionalidades principales.' }
  ];

  selectedMeeting: Meeting = this.meetings[0];

  selectMeeting(meeting: Meeting) {
    this.selectedMeeting = meeting;
  }
}
