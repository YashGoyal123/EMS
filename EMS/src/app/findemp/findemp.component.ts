import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-findemp',
  standalone: false,
  templateUrl: './findemp.component.html',
  styleUrl: './findemp.component.css',
  providers: [EmployeeService]
})
export class FindempComponent {
  emp: any;
  isEditing = false;
  editableEmp: any = {};

  constructor(private es: EmployeeService) {}

  getEmp(eid: any) {
    this.es.getEmp(eid.value.id).subscribe((res: any) => {
      this.emp = res;
    });
  }

  delete(e: any) {
    this.es.deleteEmp(e).subscribe(() => {
      alert('Are you sure to delete the record');
      this.emp = null;
    });
  }

  editEmp(employee: any) {
    this.isEditing = true;
    this.editableEmp = { ...employee };
  }

  updateEmp(editForm: any) {
    if (editForm.valid) {
      this.es.saveEmp(this.editableEmp).subscribe(() => {
        alert('Employee record updated successfully');
        this.isEditing = false;
        this.emp = { ...this.editableEmp };
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }
}