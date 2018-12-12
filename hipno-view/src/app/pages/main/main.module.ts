import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PageModule } from '../page.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PageModule,
    SharedModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
