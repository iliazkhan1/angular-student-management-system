import { Component,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  newStudent = { name: '', grade: 0 };

  @Output() addStudent = new EventEmitter<any>();

  submitForm() {
    if (this.newStudent.name.trim() && this.newStudent.grade >= 0) {
      this.addStudent.emit(this.newStudent);
      this.newStudent = { name: '', grade: 0 };
    }
  }

}
