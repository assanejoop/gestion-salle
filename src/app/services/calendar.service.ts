import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CalendarEvent } from '../models/events.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private eventsSubject = new BehaviorSubject<CalendarEvent[]>([
    {
      id: '1',
      title: 'Présentation projet',
      date: new Date(2025, 2, 10),  // 10 Mars 2025
      startTime: '09:00',
      type: 'presentation',
      color: 'bg-green-100 text-green-800'
    },
    {
      id: '2',
      title: 'Faire le point',
      date: new Date(2025, 2, 10),  // 10 Mars 2025
      startTime: '11:00',
      type: 'meeting',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: '3',
      title: 'Réunion équipe',
      date: new Date(2025, 2, 11),  // 11 Mars 2025
      startTime: '13:00',
      type: 'meeting',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: '4',
      title: 'Déjeuner client',
      date: new Date(2025, 2, 14),  // 14 Mars 2025
      startTime: '09:30',
      type: 'lunch',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: '5',
      title: 'Ajouter les données',
      date: new Date(2025, 2, 14),  // 14 Mars 2025
      startTime: '09:30',
      type: 'other',
      color: 'bg-red-100 text-red-800'
    },
    {
      id: '6',
      title: 'Générer rapport',
      date: new Date(2025, 2, 13),  // 13 Mars 2025
      startTime: '11:30',
      type: 'generate',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: '7',
      title: 'Mettre à jour',
      date: new Date(2025, 2, 13),  // 13 Mars 2025
      startTime: '11:30',
      type: 'other',
      color: 'bg-red-100 text-red-800'
    }
  ]);

  getEvents(): Observable<CalendarEvent[]> {
    return this.eventsSubject.asObservable();
  }

  addEvent(event: CalendarEvent): void {
    const currentEvents = this.eventsSubject.getValue();
    this.eventsSubject.next([...currentEvents, event]);
  }
}
