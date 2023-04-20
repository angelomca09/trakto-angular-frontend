import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeIconComponent } from './icon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeIconComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeIconComponent]
})
export class HomeIconModule {

}