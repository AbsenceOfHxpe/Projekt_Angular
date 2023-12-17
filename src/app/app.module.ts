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
import { HttpClientModule } from '@angular/common/http';
import { SortBikesPipe } from "./sort-bikes.pipe";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RowerComponent,
        RowerAdminComponent,
        EditRowerComponent,
        AddRowerComponent
    ],
    providers: [RowersService, SortBikesPipe],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SortBikesPipe,
        CommonModule, 
        RouterOutlet, 
        RouterLink, 
        RouterLinkActive
    ]
})
export class AppModule { }
