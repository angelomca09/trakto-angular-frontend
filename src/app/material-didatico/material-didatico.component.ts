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
  loading: boolean = true;

  constructor(
    private materialDidaticoService: MaterialDidaticoService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.materialDidaticoService.listMaterials(10)
      .subscribe(res => {
        this.materials = res.data;
        this.loading = false;
      })
  }
}