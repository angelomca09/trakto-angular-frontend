import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  @Input() id: string = "";
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() pages: any[];
  numPages: number = 1;
  link: string = "";

  constructor() { }

  ngOnInit(): void {
    if (this.pages) {
      this.numPages = this.pages.length;
    }
    this.link = `https://editor.trakto.io/presentation/p/${this.id}`
  }
}