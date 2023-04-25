import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../shared/components/header/header.module';
import { MaterialDidaticoComponent } from './material-didatico.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material-didatico.module';

@NgModule({
  declarations: [MaterialDidaticoComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [MaterialDidaticoComponent]
})
export class MaterialDidaticoModule { }