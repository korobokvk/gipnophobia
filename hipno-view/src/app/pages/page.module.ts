import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageModule { }
