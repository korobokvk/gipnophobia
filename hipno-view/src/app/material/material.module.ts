import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSidenavModule
 } from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  exports: [
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
