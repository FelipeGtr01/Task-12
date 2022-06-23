import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENT } from '../mock-students';
import { MessageService } from '../message.service';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENT;
  selectedStudent?: Student;

  student: Student[] = [];

  constructor(private studentService: StudentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
    this.messageService.add(`StudentsComponent: Selected student id=${student.id}`);
  }

  getStudents(): void {
    this.studentService.getStudents()
        .subscribe(student => this.student = student);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.addStudent({ name } as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }
}
