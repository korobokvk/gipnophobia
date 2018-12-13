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
  MatTableModule,
  MatSelectModule
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
    MatIconModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [
    HttpClientModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [MatTableModule]
})
export class MaterialModule { }
