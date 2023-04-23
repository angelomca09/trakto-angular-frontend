import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() theme: string = "dark";
  themeClass = {};

  user: User | null = null;

  date: string;

  showRedirectButton: boolean;

  constructor(
    private userService: UserService,
    private router: Router) {
    const date = new Date();
    this.date = `${date.toLocaleDateString("pt-BR")}`;
    this.user = userService.getUser();
    this.showRedirectButton = !(router.url === "/home")
  }

  ngOnInit(): void {
    this.themeClass = {
      [this.theme]: true
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate([""]);
  }

}