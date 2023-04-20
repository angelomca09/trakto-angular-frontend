import { NgModule } from '@angular/core';
import { HomeIconModule } from './icon/icon.module';
import { HomeIconListModule } from './list/icon-list.module';

@NgModule({
  imports: [
    HomeIconModule,
    HomeIconListModule
  ]
})
export class HomeIconsModule { }