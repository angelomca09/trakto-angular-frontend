import { Component, Input } from '@angular/core';
@Component({
  selector: "home-icon",
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class HomeIconComponent {

  @Input() href = "";
  @Input() title = "";
  @Input() svg = false;
  @Input() src = "";
  @Input() alt = "";
}