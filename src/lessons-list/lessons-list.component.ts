import { Component, OnInit } from '@angular/core';
import { LessonsService, Lesson } from '../servic/lessons.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';

@Component({
  selector: 'app-lessons-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, LessonDetailsComponent],
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  lessons: Lesson[] = [];
  selectedLesson?: Lesson;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessons = this.lessonsService.getLessons();
  }

  selectLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
  }

  closeDetails() {
    this.selectedLesson = undefined;
  }
  isLessonInPast(lesson: Lesson): boolean {
    const lessonDate = new Date(lesson.date);
    const today = new Date();
  
    // מנקים את השעה להשוואה רק לפי תאריך
    lessonDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
  
    return lessonDate < today;
  }
  
}
