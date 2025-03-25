import { Component } from '@angular/core';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-student-list',
  imports: [StudentDetailComponent,StudentFormComponent],
  standalone:true,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  selectedStudent: any = null;

  students = [
    { id: 1, name: 'Iliaz', grade: 88 },
    { id: 2, name: 'Roy', grade: 50 },
    { id: 3, name: 'john', grade: 75 },
    { id: 4, name: 'Riya', grade: 20 }

  ];

  selectStudent(student: any) {
    this.selectedStudent = student;
  }
  deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }

  addStudent(newStudent: { id: number; name: string; grade: number }) {
    this.students.push(newStudent);
  }

}
