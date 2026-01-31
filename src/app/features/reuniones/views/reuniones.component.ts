import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../shared/services/modal.service';

interface Meeting {
  date: string;
  subject: string;
  teacher: string;
}

interface Filter {
  label: string;
  value: string;
}

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.component.html',
  styleUrls: ['./reuniones.component.scss']
})
export class ReunionesComponent implements OnInit {

  meetings: Meeting[] = [
    { date: '5 de Diciembre 11:00 - 11:55', subject: 'Proyecto Intermodular', teacher: 'Willman Acosta Lugo' },
    { date: '08 de Diciembre 12:00 - 12:55', subject: 'Despliegue en aplicaciones web', teacher: 'Carlos Basulto Pardo' },
    { date: '10 de diciembre 08:30 - 09:25', subject: 'Optativa', teacher: 'Willman Acosta Lugo' },
  ];

  filteredMeetings: Meeting[] = [];

  filters: Filter[] = [
    { label: 'Hoy', value: 'hoy' },
    { label: 'Esta semana', value: 'semana' },
    { label: 'Este mes', value: 'mes' }
  ];

  searchTerm: string = '';
  activeFilter: string | null = null;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.filteredMeetings = [...this.meetings];
  }

  toggleFilter(filterValue: string): void {
    if (this.activeFilter === filterValue) {
      this.activeFilter = null;
    } else {
      this.activeFilter = filterValue;
    }
  }

  applyFilters(): void {
    let filtered = [...this.meetings];

    // Filtro de búsqueda
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(m =>
        m.date.toLowerCase().includes(term) ||
        m.subject.toLowerCase().includes(term) ||
        m.teacher.toLowerCase().includes(term)
      );
    }

    // Aquí podrías añadir la lógica real de filtros por fecha
    // Por ahora solo registramos cuál se aplicó
    console.log(`Filtro aplicado: ${this.activeFilter}`);

    this.filteredMeetings = filtered;
  }

  cancelMeeting(meeting: Meeting): void {
    this.modalService.confirm(
      'Cancelar Reunión',
      `¿Estás seguro de que quieres cancelar la reunión de ${meeting.subject} el ${meeting.date}?`,
      'Sí, Cancelar',
      'No, mantener'
    ).then(confirmed => {
      if (confirmed) {
        this.filteredMeetings = this.filteredMeetings.filter(m => m !== meeting);
        this.meetings = this.meetings.filter(m => m !== meeting);
      }
    });
  }
}
