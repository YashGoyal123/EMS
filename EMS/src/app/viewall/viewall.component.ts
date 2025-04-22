import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-viewall',
  standalone: false,
  templateUrl: './viewall.component.html',
  styleUrl: './viewall.component.css',
  providers: [EmployeeService]
})

export class ViewallComponent {
   emp: any;
  isEditing = false;
  editableEmp: any = {};
  constructor(private es:EmployeeService) {
    this.getAll();
   }
  getAll(){
    this.es.getEmployees().subscribe((res:any)=>{
      this.emp=res;
    })
  }
  delete(e:any){
    this.es.deleteEmp(e).subscribe(()=>{this.getAll()})
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
