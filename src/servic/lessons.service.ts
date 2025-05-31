import { Injectable } from '@angular/core';

export interface Lesson {
  id: number;
  name: string;
  teacher: string;
  countMitinig: number;
  date: string;
  time: string;
  price: number;
  houer: string;
}

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor() { }

  private lessons: Lesson[] = [
    { id: 1, name: 'מתמטיקה', teacher: 'רוני כהן', countMitinig: 10, date: '2024-05-12', time: '10:00', price: 200, houer: '1:00' },
    { id: 2, name: 'אנגלית', teacher: 'שרה לוי', countMitinig: 8, date: '2025-05-13', time: '12:00', price: 180, houer: '1:30' },
    { id: 3, name: 'היסטוריה', teacher: 'דוד מזרחי', countMitinig: 12, date: '2023-05-13', time: '14:00', price: 150, houer: '1:15' },
    { id: 4, name: 'כימיה', teacher: 'חנה דוידי', countMitinig: 6, date: '2025-05-14', time: '09:00', price: 220, houer: '1:00' },
    { id: 5, name: 'פיזיקה', teacher: 'אורי בן-צור', countMitinig: 9, date: '2025-05-15', time: '11:00', price: 210, houer: '1:45' }
  ];

  getLessons(): Lesson[] {
    return this.lessons;
  }
}
