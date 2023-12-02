import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RowerComponent } from './rower/rower.component';
import { RowerAdminComponent } from './rower-admin/rower-admin.component';
import { EditRowerComponent } from './edit-rower/edit-rower.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRowerComponent } from './add-rower/add-rower.component';
import { RowersService } from './rowers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RowerComponent,
    RowerAdminComponent,
    EditRowerComponent,
    AddRowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
