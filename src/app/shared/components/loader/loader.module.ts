import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';
import { CommonModule } from '@angular/common';
import { ButtonLoaderComponent } from './button-loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ButtonLoaderComponent
  ],
  imports: [CommonModule],
  exports: [
    LoaderComponent,
    ButtonLoaderComponent
  ]
})
export class LoaderModule { }