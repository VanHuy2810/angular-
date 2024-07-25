import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GetDataStudentService } from '../get-data-student.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css',
})
export class StudentDetailComponent {
  public departmentId: any;
  postDetail: any;
  constructor(
    private route: ActivatedRoute,
    private getdatastudent: GetDataStudentService,
    private router: Router
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && typeof id === 'string') {
      this.departmentId = id;
      this.getdatastudent.getPostDetail(this.departmentId).subscribe(
        (data) => {
          this.postDetail = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  handleBack() {
    this.router.navigate(['/student']);
  }
}
