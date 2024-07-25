import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/:id', component: StudentDetailComponent },
  { path: 'addstudent', component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
