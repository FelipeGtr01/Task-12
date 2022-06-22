import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  @Input() teacher?: Teacher;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeacher();
  }
  
  getTeacher(): void {
    const id = Number(this.route.snapshot.paramMap.get('idprof'));
    this.teacherService.getTeacher(id)
    .subscribe(teacher => this.teacher = teacher);
  }
  goBack(): void {
    this.location.back();
  }
}
