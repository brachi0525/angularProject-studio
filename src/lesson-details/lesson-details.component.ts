import { Component, Input ,Output, EventEmitter} from '@angular/core';
import { Lesson } from '../servic/lessons.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css'],
  imports: [MatCardModule, CommonModule]
})
export class LessonDetailsComponent {
  @Input() lesson!: Lesson;
  @Output() close = new EventEmitter<void>();

}
