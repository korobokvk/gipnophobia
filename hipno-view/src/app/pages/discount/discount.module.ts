import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountComponent } from './discount.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DiscountComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
]
@NgModule({
  declarations: [DiscountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class DiscountModule { }
