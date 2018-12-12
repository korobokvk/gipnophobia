import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MenuComponent } from './menu/menu.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [CrudFormComponent, MenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CrudFormComponent,
    MaterialModule, 
    MenuComponent
  ]
})
export class SharedModule { }
