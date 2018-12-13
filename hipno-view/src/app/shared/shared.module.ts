import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './menu/menu.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ReservesComponent } from './reserves/reserves.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrudFormComponent, MenuComponent, DetailsComponent, ReservesComponent, SettingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CrudFormComponent,
    MaterialModule, 
    MenuComponent,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SettingComponent
  ]
})
export class SharedModule { }
