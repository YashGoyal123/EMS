import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-insert',
  standalone: false,
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {
  newEmployee = { id: '', fname: '', lname: '', age: '', salary: '' };

  constructor(private es: EmployeeService) {}

  AddEmp() {
    this.es.addEmp(this.newEmployee).subscribe({
      next: () => alert('Employee added successfully.'),
      error: () => alert('Failed to add employee.')
    });
  }
}
