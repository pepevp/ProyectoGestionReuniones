import { Component, OnInit } from '@angular/core';

interface PastMeeting {
  id: number;
  student: string;
  subject: string;
  date: string;
  topic: string;
  actaStatus: 'enviada' | 'no-realizada';
}

@Component({
  selector: 'app-reuniones-pasadas-profesor',
  templateUrl: './reuniones-pasadas-profesor.component.html',
  styleUrls: ['./reuniones-pasadas-profesor.component.scss']
})
export class ReunionesPasadasProfesorComponent implements OnInit {
  searchTerm: string = '';
  activeFilter: string | null = null;
  
  meetings: PastMeeting[] = [
    {
      id: 1,
      student: 'Alejandro Pérez Ferri',
      subject: 'IPE',
      date: '03/12/2025',
      topic: 'Diseño y resolución',
      actaStatus: 'enviada'
    },
    {
      id: 2,
      student: 'Jaime Martín García',
      subject: 'Proyecto de DAW',
      date: '08/12/2025',
      topic: 'Evaluar y resumir fallos',
      actaStatus: 'enviada'
    },
    {
      id: 3,
      student: 'Nicolás Cabello',
      subject: 'Inglés profesional',
      date: '13/12/2025',
      topic: 'ERD entidades y atributos',
      actaStatus: 'no-realizada'
    },
    {
      id: 4,
      student: 'Miguel Ángel Busatori',
      subject: 'Desarrollo web en entorno servidor',
      date: '18/12/2025',
      topic: 'Sprint Review I - Presencial',
      actaStatus: 'enviada'
    },
    {
      id: 5,
      student: 'Jose Jesús Velázquez',
      subject: 'Desarrollo web en entorno cliente',
      date: '07/01/2026',
      topic: 'Exponer ideas',
      actaStatus: 'enviada'
    }
  ];

  filteredMeetings: PastMeeting[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredMeetings = [...this.meetings];
  }

  setFilter(filter: string): void {
    if (this.activeFilter === filter) {
      this.activeFilter = null;
    } else {
      this.activeFilter = filter;
    }
  }

  applyFilters(): void {
    if (!this.activeFilter) {
      this.filteredMeetings = [...this.meetings];
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.filteredMeetings = this.meetings.filter(meeting => {
      const [day, month, year] = meeting.date.split('/').map(Number);
      const meetingDate = new Date(year, month - 1, day);
      meetingDate.setHours(0, 0, 0, 0);

      switch (this.activeFilter) {
        case 'hoy':
          return meetingDate.getTime() === today.getTime();
        
        case 'semana':
          const weekAgo = new Date(today);
          weekAgo.setDate(today.getDate() - 7);
          return meetingDate >= weekAgo && meetingDate <= today;
        
        case 'mes':
          const monthAgo = new Date(today);
          monthAgo.setMonth(today.getMonth() - 1);
          return meetingDate >= monthAgo && meetingDate <= today;
        
        default:
          return true;
      }
    });

    console.log(`Filtro aplicado: ${this.activeFilter}, Reuniones encontradas: ${this.filteredMeetings.length}`);
  }

  filterMeetings(): void {
    const term = this.searchTerm.toLowerCase();
    
    if (!term) {
      this.filteredMeetings = [...this.meetings];
      return;
    }

    this.filteredMeetings = this.meetings.filter(meeting => 
      meeting.student.toLowerCase().includes(term) ||
      meeting.subject.toLowerCase().includes(term) ||
      meeting.date.includes(term) ||
      meeting.topic.toLowerCase().includes(term)
    );
  }

  viewActa(meetingId: number): void {
    console.log(`Ver acta de la reunión: ${meetingId}`);
    // Aquí puedes redirigir a la página de visualización del acta
    // o abrir un modal con el contenido del acta
  }

  downloadActa(meetingId: number): void {
    console.log(`Descargar acta de la reunión: ${meetingId}`);
    // Lógica para descargar el acta
  }
}