import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() theme: string = "dark";
  themeClass = {};

  constructor() { }

  ngOnInit(): void {
    this.themeClass = {
      [this.theme]: true
    }
  }

}