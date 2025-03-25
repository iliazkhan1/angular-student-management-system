import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { ReverseNamePipe } from '../reverse-name.pipe';

@Component({
  selector: 'app-student-detail',
  standalone:true,
  imports: [CommonModule,ReverseNamePipe],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent {
  @Input() student: any;

}
