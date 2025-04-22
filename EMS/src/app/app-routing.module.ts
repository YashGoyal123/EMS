import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewallComponent } from './viewall/viewall.component';
import { FindempComponent } from './findemp/findemp.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:ViewallComponent},
  {path:"all", component:ViewallComponent},
  {path:"search", component:FindempComponent},
  {path:"insert", component:InsertComponent},
  {path:"update", component:UpdateComponent},
  {path:"delete", component:DeleteComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
