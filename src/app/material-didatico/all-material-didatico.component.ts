import { Component, OnInit } from '@angular/core';
import { MaterialDidatico } from './material-didatico';
import { MaterialDidaticoService } from './material-didatico.service';
@Component({
  templateUrl: './all-material-didatico.component.html',
  styleUrls: ['./material-didatico.component.css']
})
export class AllMaterialDidaticoComponent implements OnInit {

  materials: MaterialDidatico[] = [];
  loading: boolean = true;

  constructor(
    private materialDidaticoService: MaterialDidaticoService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.materialDidaticoService.listMaterials()
      .subscribe(res => {
        this.materials = res.data;
        this.loading = false;
      })
  }
}