export interface CalendarEvent {
    id: string;
    title: string;
    date: Date;
    startTime: string;
    endTime?: string;
    type: 'meeting' | 'event' | 'reminder' | 'lunch' | 'presentation' | 'generate' | 'other';
    color: string;
  }