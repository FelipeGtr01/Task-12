import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TEACHERS } from '../mock-teacher';
import { TeacherService } from '../teacher.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers = TEACHERS;
  selectedTeacher?: Teacher;

  teacher: Teacher[] = [];

  constructor(private teachersService: TeacherService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(teacher: Teacher): void {
    this.selectedTeacher = teacher;
    this.messageService.add(`TeachersComponent: Selected teacher id=${teacher.idprof}`);
  }

  getStudents(): void {
    this.teachersService.getTeachers()
        .subscribe(teacher => this.teacher = teacher);
  }
}

