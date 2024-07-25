import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { GetDataStudentService } from '../get-data-student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  public dataStudent: any[] = [];
  constructor(
    private dataStudentService: GetDataStudentService,
    private route: Router
  ) {}
  ngOnInit() {
    this.dataStudentService.getStudent().subscribe((data) => {
      this.dataStudent = data;
      console.log(this.dataStudent);
    });
  }

  handleDetail(id: any) {
    console.log(id);
    this.route.navigate(['/student', id]);
  }
}
