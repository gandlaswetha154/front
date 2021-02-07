
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employee-create' },
  { path: 'employee-create', component: EmployeeCreateComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  { path: 'employee-list', component: EmployeeListComponent }  
];



@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}