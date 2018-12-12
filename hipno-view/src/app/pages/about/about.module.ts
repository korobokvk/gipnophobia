import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
]

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AboutModule { }
