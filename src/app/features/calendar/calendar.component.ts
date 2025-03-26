// src/app/components/calendrier/calendrier.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarService } from '../../services/calendar.service';
import { CalendarEvent } from '../../models/events.model';
import { addDays, startOfWeek, format, isEqual, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  isOpen = false;
  selectedOption = 'Semaine';
  options = ['Semaine', 'Mois', 'Jour'];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }
  currentDate: Date = new Date();
  days: Date[] = [];
  events: CalendarEvent[] = [];
  currentView = 'week';
  timeSlots: string[] = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  participants = [
    { id: 1, name: "User 1", avatar: "/assets/avatar1.png" },
    { id: 2, name: "User 2", avatar: "/assets/avatar2.png" },
    { id: 3, name: "User 3", avatar: "/assets/avatar3.png" },
    { id: 4, name: "User +", avatar: "/assets/more.png" }
  ];

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.getEvents().subscribe(events => {
      this.events = events;
    });
    this.generateDaysOfWeek();
  }

  generateDaysOfWeek(): void {
    this.days = [];
    const weekStart = startOfWeek(this.currentDate, { weekStartsOn: 1 }); // Start from Monday

    for (let i = 0; i < 7; i++) {
      this.days.push(addDays(weekStart, i));
    }
  }

  previousWeek(): void {
    this.currentDate = addDays(this.currentDate, -7);
    this.generateDaysOfWeek();
  }

  nextWeek(): void {
    this.currentDate = addDays(this.currentDate, 7);
    this.generateDaysOfWeek();
  }

  goToToday(): void {
    this.currentDate = new Date();
    this.generateDaysOfWeek();
  }

  formatDayName(date: Date): string {
    return format(date, 'EEEE', { locale: fr });
  }

  formatDayNumber(date: Date): string {
    return format(date, 'd', { locale: fr });
  }

  formatMonth(): string {
    return format(this.currentDate, 'MMMM yyyy', { locale: fr });
  }

  getEventsForDateAndTime(date: Date, time: string): CalendarEvent[] {
    return this.events.filter(event =>
      isSameDay(new Date(event.date), date) &&
      event.startTime === time
    );
  }

  isToday(date: Date): boolean {
    return isEqual(
      new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    );
  }

  isCurrentDay(date: Date): boolean {
    return isSameDay(date, this.currentDate);
  }
}
