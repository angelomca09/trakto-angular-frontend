import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../shared/components/header/header.module';
import { MaterialDidaticoComponent } from './material-didatico.component';

@NgModule({
  declarations: [MaterialDidaticoComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
  ]
})
export class MaterialDidaticoModule { }