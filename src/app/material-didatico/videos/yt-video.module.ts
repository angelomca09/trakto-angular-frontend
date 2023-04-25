import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { YoutubeVideoComponent } from './yt-video.component';

@NgModule({
  declarations: [YoutubeVideoComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [YoutubeVideoComponent]
})
export class YoutubeVideoModule { }