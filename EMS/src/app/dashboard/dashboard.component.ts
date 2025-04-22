import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  employees: any[] = [];
  totalEmployees = 0;
  averageSalary = 0;
  ageDistribution: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployeeData();
  }
  loadEmployeeData() {
    this.employeeService.getEmployees().subscribe((response: any) => { 
      if (Array.isArray(response)) { 
        this.employees = response;
        this.totalEmployees = response.length;
  
        
        const totalSalary = response.reduce((sum, emp) => sum + emp.salary, 0);
        this.averageSalary = totalSalary / this.totalEmployees || 0;
  
        
        this.ageDistribution = [
          { name: '20-30', value: response.filter(emp => emp.age >= 20 && emp.age <= 30).length },
          { name: '31-40', value: response.filter(emp => emp.age >= 31 && emp.age <= 40).length },
          { name: '41-50', value: response.filter(emp => emp.age >= 41 && emp.age <= 50).length },
          { name: '51+', value: response.filter(emp => emp.age >= 51).length },
        ];
      } else {
        console.error("API did not return an array:", response);
      }
    }, error => {
      console.error("Error fetching employee data:", error);
    });
  }
}