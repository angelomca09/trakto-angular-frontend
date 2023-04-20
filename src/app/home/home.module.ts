import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../shared/components/header/header.module';
import { HomeIconsModule } from './home-icon/home-icon.module';
import { HomeIconModule } from './home-icon/icon/icon.module';
import { HomeIconListModule } from './home-icon/list/icon-list.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    HomeIconModule,
    HomeIconListModule
  ]
})
export class HomeModule { }