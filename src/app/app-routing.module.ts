import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowerAdminComponent } from './rower-admin/rower-admin.component';

const routes: Routes = [
  { path: 'rower-admin-component', component: RowerAdminComponent },
  //{ path: 'second-component', component: SecondComponent },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
