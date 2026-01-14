import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Meeting {
  date: string;
  time: string;
  subject: string;
  teacher: string;
  initials: string;
  canFillActa: boolean; // Para saber si mostrar el botón verde o gris
}

@Component({
  selector: 'app-proximas-reuniones-profesor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proximas-reuniones-profesor.component.html',
  styleUrls: ['./proximas-reuniones-profesor.component.scss']
})
export class ProximasReunionesProfesorComponent implements OnInit {
  
  meetings: Meeting[] = [
    { 
      date: '4 de Diciembre', time: '11:00 - 11:55', 
      subject: 'Proyecto Intermodular', teacher: 'Ignacio Maurolagoitia', 
      initials: 'PI', canFillActa: true 
    },
    { 
      date: '06 de Diciembre', time: '12:00 - 12:55', 
      subject: 'Lenguaje de marcas', teacher: 'Jaime Martín', 
      initials: 'LDM', canFillActa: false 
    },
    { 
      date: '10 de diciembre', time: '08:30 - 09:25', 
      subject: 'Optativa', teacher: 'Alejandro Pérez', 
      initials: 'OPT', canFillActa: false 
    }
  ];

  ngOnInit(): void {}
}