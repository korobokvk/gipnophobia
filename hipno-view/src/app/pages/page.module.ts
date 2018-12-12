import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'about', loadChildren:  './about/about.module#AboutModule'},
  { path: 'details', loadChildren: './details/details.module#DetailsModule'},
  { path: 'discount', loadChildren: './discount/discount.module#DiscountModule'},
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackModule'},
  { path: 'sertificate', loadChildren: './sertificate/sertificate.module#SertificateModule'},
  { path: 'reserves', loadChildren: './reserves/reserves.module#ReservesModule'},
  { path: '**', pathMatch: 'full', redirectTo: 'about'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PageModule { }
