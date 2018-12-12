import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SertificateComponent } from './sertificate.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: SertificateComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
]
@NgModule({
  declarations: [SertificateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SertificateModule { }
