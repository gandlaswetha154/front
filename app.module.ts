import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' ;

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,//Add if needed 
   FormsModule,     //Add if needed
    RouterModule.forRoot([{
      path : 'employee-create',
      component : EmployeeCreateComponent
    },
    {
      path : 'employee-list',
      component :  EmployeeListComponent
    }])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
