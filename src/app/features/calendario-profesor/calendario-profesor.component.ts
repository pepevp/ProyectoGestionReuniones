import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario-profesor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario-profesor.component.html',
  styleUrls: ['./calendario-profesor.component.scss']
})
export class CalendarioProfesorComponent implements OnInit {

  currentDate: Date = new Date();
  selectedDate: Date | null = null;
  
  // Lista de horas seleccionadas (para permitir marcar/desmarcar)
  selectedHours: string[] = [];

  monthNames: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  calendarDays: { day: number, disabled: boolean, empty: boolean }[] = [];

  // Definimos las horas en un array para que el HTML sea más limpio
  hours: string[] = [
    '08:30 - 09:25', 
    '09:30 - 10:25', 
    '11:00 - 11:55', 
    '12:00 - 12:55', 
    '13:00 - 13:55', 
    '14:00 - 14:55'
  ];

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1; // Ajuste para que empiece en Lunes

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.calendarDays = [];

    for (let i = 0; i < startDay; i++) {
      this.calendarDays.push({ day: 0, disabled: false, empty: true });
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDayDate = new Date(year, month, day);
      const disabled = currentDayDate < today;
      this.calendarDays.push({ day, disabled, empty: false });
    }
  }

  prevMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar();
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar();
  }

  selectDay(day: { day: number, disabled: boolean, empty: boolean }): void {
    if (day.disabled || day.empty) return;
    this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day.day);
  }

  // --- FUNCIÓN PARA MARCAR / DESMARCAR ---
  toggleHour(hour: string): void {
    const index = this.selectedHours.indexOf(hour);
    if (index > -1) {
      // Si ya está en la lista, lo eliminamos (desmarcar)
      this.selectedHours.splice(index, 1);
    } else {
      // Si no está, lo añadimos (marcar)
      this.selectedHours.push(hour);
    }
  }

  confirmMeeting(): void {
    if (this.selectedDate && this.selectedHours.length > 0) {
      alert(`Confirmado para el ${this.selectedDate.toLocaleDateString()} a las: ${this.selectedHours.join(', ')}`);
    } else {
      alert('Por favor, selecciona una fecha y al menos una hora.');
    }
  }

  getMonthYear(): string {
    return `${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
  }
}