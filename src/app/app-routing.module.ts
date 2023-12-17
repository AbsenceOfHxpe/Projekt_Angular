import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowerAdminComponent } from './rower-admin/rower-admin.component';
import { EditRowerComponent } from './edit-rower/edit-rower.component';
import { AddRowerComponent } from './add-rower/add-rower.component';


const routes: Routes = [
  { path: 'rower-admin-component/edit-rower-component/:id', component: EditRowerComponent, data: {pageTitle: 'Edycja roweru'} },
  { path: 'rower-admin-component/add-rower-component', component: AddRowerComponent, data: {pageTitle: 'Dodawanie roweru'}},
  { path: 'rower-admin-component', component: RowerAdminComponent, data: {pageTitle: 'Admin Panel'} }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
