import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  type: 'accepted' | 'cancelled';
  message: string;
  date: Date;
}

@Component({
  selector: 'app-notificaciones-profesor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificaciones-profesor.component.html',
  styleUrls: ['./notificaciones-profesor.component.scss'] // <-- Corregido a plural con []
})
export class NotificacionesProfesorComponent implements OnInit {
  notifications: Notification[] = [
    {
      id: 1,
      type: 'accepted',
      message: 'Alejandro Pérez Ferri ha solicitado una reunión para el Viernes 23 de Agosto de 2026.',
      date: new Date('2026-08-23')
    },
    {
      id: 2,
      type: 'cancelled',
      message: 'Jaime Martín García ha cancelado la reunión para el Viernes 23 de Agosto de 2026.',
      date: new Date('2026-08-23')
    },
    {
      id: 3,
      type: 'accepted',
      message: 'Nicolás Cabello ha solicitado una reunión para el Jueves 20 de Mayo de 2026.',
      date: new Date('2026-05-20')
    },
    {
      id: 4,
      type: 'cancelled',
      message: 'Miguel Ángel Busatori ha cancelado la reunión para el Jueves 22 de Agosto de 2026.',
      date: new Date('2026-08-22')
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications(): void {
    console.log('Notificaciones cargadas:', this.notifications.length);
  }

  deleteNotification(notificationId: number): void {
    this.notifications = this.notifications.filter(n => n.id !== notificationId);
  }

  clearAllNotifications(): void {
    if (this.notifications.length > 0 && confirm('¿Estás seguro de que quieres eliminar todas las notificaciones?')) {
      this.notifications = [];
    }
  }
}