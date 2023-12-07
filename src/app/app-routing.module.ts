import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowerAdminComponent } from './rower-admin/rower-admin.component';
import { EditRowerComponent } from './edit-rower/edit-rower.component';

const routes: Routes = [
  { path: 'rower-admin-component', component: RowerAdminComponent },
  { path: 'edit-rower-component/:id', component: EditRowerComponent }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
