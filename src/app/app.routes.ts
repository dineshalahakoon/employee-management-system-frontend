import { Routes } from '@angular/router';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { AddEmpoyeeComponent } from './add-empoyee/add-empoyee.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {
        path:"add",
        component:AddEmpoyeeComponent
    },
    {
        path:"manage",
        component:ManageEmployeeComponent
    },
   
];


