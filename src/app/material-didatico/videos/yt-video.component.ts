import { Component, Input } from '@angular/core';

@Component({
  selector: 'yt-video',
  templateUrl: './yt-video.component.html',
  styleUrls: ['./yt-video.component.css']
})
export class YoutubeVideoComponent {

  @Input() thumbnail: string = "";
  @Input() title: string = "";
  @Input() url: string = "";

  constructor() { }

}