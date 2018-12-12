import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DetailsComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
]
@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsModule { }
