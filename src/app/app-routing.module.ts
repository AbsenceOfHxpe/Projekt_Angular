import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowerAdminComponent } from './rower-admin/rower-admin.component';
import { EditRowerComponent } from './edit-rower/edit-rower.component';
import { AddWypozyczenieComponent } from './add-wypozyczenie/add-wypozyczenie.component';
import { WypozyczeniaComponent } from './wypozyczenia/wypozyczenia.component';
import { ZwrotComponent } from './zwrot/zwrot.component';
import { RowerComponent } from './rower/rower.component';

const routes: Routes = [
  { path: 'rower-component', component: RowerComponent },
  { path: 'rower-admin-component', component: RowerAdminComponent },
  { path: 'edit-rower-component/:id', component: EditRowerComponent },
  { path: 'add-wypozyczenie-component/:id', component: AddWypozyczenieComponent },
  { path: 'wypozyczenia-component', component: WypozyczeniaComponent },
  { path: 'zwrot-component/:id', component: ZwrotComponent }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
