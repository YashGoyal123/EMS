import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(private es:EmployeeService){}
  
  deleteEmp(data:any){
    this.es.deleteEmp(data.value.id).subscribe(()=>{"Record Deleted Successfully "});
  }
}
