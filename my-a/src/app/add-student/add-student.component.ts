import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AddStudentsService } from '../services/add-students.service';
import { title } from 'node:process';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  addFormPost: FormGroup;
  public postForm!: FormGroup;
  selectedLanguages: any[] = [];

  constructor(
    private addstudentser: AddStudentsService,
    private router: Router
  ) {
    this.addFormPost = new FormGroup({
      id: new FormControl(undefined),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      subtitle: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      public_date: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      categories: new FormControl([]),
    });
  }

  onCheckboxChange(e: any) {
    console.log(e.target.value);
    const values = e.target.value;
    if (e.target.checked) {
      this.selectedLanguages.push(values);
      console.log(this.selectedLanguages);
    } else {
      const index = this.selectedLanguages.indexOf(values);
      if (index > -1) {
        this.selectedLanguages.splice(index, 1);
      }
    }
    this.addFormPost.get('categories')?.setValue(this.selectedLanguages);
  }

  onSubmit() {
    if (this.addFormPost.valid) {
      const formData = this.addFormPost.value;
      this.addstudentser.addStudent(formData).subscribe(
        (ress) => {
          console.log(ress);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    setTimeout(() => {
      this.router.navigate(['/student']);
    }, 3000);
  }
  public get title() {
    return this.addFormPost.get('title');
  }
  public get subtitle() {
    return this.addFormPost.get('subtitle');
  }
  public get content() {
    return this.addFormPost.get('content');
  }
  public get author() {
    return this.addFormPost.get('author');
  }
  public get public_date() {
    return this.addFormPost.get('public_date');
  }
}
