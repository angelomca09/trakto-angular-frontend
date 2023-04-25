import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../shared/components/header/header.module';
import { MaterialDidaticoComponent } from './material-didatico.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material-didatico.module';
import { YoutubeVideoModule } from './videos/yt-video.module';
import { AllMaterialDidaticoComponent } from './all-material-didatico.component';
import { LoaderModule } from '../shared/components/loader/loader.module';

@NgModule({
  declarations: [
    MaterialDidaticoComponent,
    AllMaterialDidaticoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    HttpClientModule,
    MaterialModule,
    YoutubeVideoModule,
    LoaderModule
  ],
  exports: [
    MaterialDidaticoComponent,
    AllMaterialDidaticoComponent
  ]
})
export class MaterialDidaticoModule { }