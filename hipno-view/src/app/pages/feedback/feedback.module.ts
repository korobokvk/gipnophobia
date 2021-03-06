import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FeedbackComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
]

@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedbackModule { }
