import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  currentDate: Date = new Date();
  selectedDate: Date | null = null;
  selectedHour: string | null = null;

  monthNames: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  weekdays: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  calendarDays: { day: number, disabled: boolean, empty: boolean }[] = [];

  hours: string[] = ['11:00 - 11:55', '12:00 - 12:55'];

  constructor() { }

  ngOnInit(): void {
    this.renderCalendar();
  }

  prevMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar();
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar();
  }

  renderCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.calendarDays = [];

    // Espacios vacíos
    for (let i = 0; i < startDay; i++) {
      this.calendarDays.push({ day: 0, disabled: false, empty: true });
    }

    // Días del mes
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const currentDayDate = new Date(year, month, day);
      currentDayDate.setHours(0, 0, 0, 0);

      const disabled = currentDayDate < today;
      this.calendarDays.push({ day, disabled, empty: false });
    }
  }

  selectDay(day: { day: number, disabled: boolean, empty: boolean }): void {
    if (day.disabled || day.empty) return;

    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    this.selectedDate = new Date(year, month, day.day);
  }

  selectHour(hour: string): void {
    this.selectedHour = hour;
  }

  confirmMeeting(): void {
    if (this.selectedDate && this.selectedHour) {
      alert(`Reunión confirmada para ${this.selectedDate.toLocaleDateString('es-ES')} a las ${this.selectedHour}`);
    } else {
      alert('Por favor, selecciona una fecha y una hora');
    }
  }

  getMonthYear(): string {
    return `${this.monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
  }

}
