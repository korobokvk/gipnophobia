import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { 
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
 } from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HttpClientModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
