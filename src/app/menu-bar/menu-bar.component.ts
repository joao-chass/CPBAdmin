import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  reason = '';

  constructor() { }

  ngOnInit(): void {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
