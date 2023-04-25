import { Component, OnInit } from '@angular/core';
import { MaterialDidatico, YoutubeVideo, yt_videos } from './material-didatico';
import { MaterialDidaticoService } from './material-didatico.service';
@Component({
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.css']
})
export class MaterialDidaticoComponent implements OnInit {

  materials: MaterialDidatico[] = [];
  videos: YoutubeVideo[] = yt_videos;

  constructor(
    private materialDidaticoService: MaterialDidaticoService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.materialDidaticoService.listMaterials()
      .subscribe(res => {
        this.materials = [...res.data, ...res.data]
        console.log(this.materials)
      })
  }
}