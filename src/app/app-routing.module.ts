import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsComponent } from './students/students.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'detail/:idprof', component: TeacherDetailComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
