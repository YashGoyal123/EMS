import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private http:HttpClient) { }
  url1="http://localhost:9090/employees"
  url2='http://localhost:9090/delete'
  url3='http://localhost:9090/emp'
  url4='http://localhost:9090/save'
  url5='http://localhost:9090/update'
  getEmployees(){
    return this.http.get(this.url1);
  }
  deleteEmp(id:any){
    alert(id + " employee has been deleted from the system")
    return this.http.delete(this.url2+"/"+id);
  }
  getEmp(eid:any){
    return this.http.get(this.url3+"/"+eid);
  }
  addEmp(emp1: any) {
    return this.http.post(this.url4, emp1); 
  }
  saveEmp(emp2: any) {
    return this.http.post(this.url5, emp2); 
  }
}
