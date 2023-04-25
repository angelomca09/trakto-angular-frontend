import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialComponent } from './material.component';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [MaterialComponent]
})
export class MaterialModule { }