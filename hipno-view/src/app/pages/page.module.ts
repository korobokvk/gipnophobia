import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import './about/about.module'

const routes: Routes = [
  { path: '', loadChildren:  './about/about.module#AboutModule'},
  { path: '**', pathMatch: 'full', redirectTo: ''}
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
