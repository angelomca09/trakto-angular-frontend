import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeIconListComponent } from './icon-list.component';
import { HomeIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    HomeIconListComponent
  ],
  imports: [
    CommonModule,
    HomeIconModule
  ],
  exports: [HomeIconListComponent]
})
export class HomeIconListModule { }