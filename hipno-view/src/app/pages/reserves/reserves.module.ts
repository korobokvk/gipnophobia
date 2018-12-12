import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservesComponent } from './reserves.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ReservesComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
]

@NgModule({
  declarations: [ReservesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReservesModule { }
