import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  constructor(private es:EmployeeService){}
  
  UpdateEmp(data:any){
    alert("Update.....")
    this.es.saveEmp(data.value).subscribe(()=>{alert("Record Updated SuccessFully")});
  }
}
