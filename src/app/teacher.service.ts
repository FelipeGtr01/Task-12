import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { TEACHERS } from './mock-teacher';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  getTeachers(): Observable<Teacher[]> {
    const teachers = of(TEACHERS);
    this.messageService.add('Serviço de professor: professores buscados');
    return teachers;
  }

  constructor(private messageService: MessageService) { }

  getTeacher(idprof: number): Observable<Teacher> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const teacher = TEACHERS.find(h => h.idprof === idprof)!;
    this.messageService.add(`Professor Selecionado id=${idprof}`);
    return of(teacher);
  }
}