import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module'
import { CrudFormComponent } from './crud-form/crud-form.component'

@NgModule({
  declarations: [CrudFormComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [CrudFormComponent,MaterialModule]
})
export class SharedModule { }
