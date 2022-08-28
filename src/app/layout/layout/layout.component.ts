import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isLargeAsideMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleAsideMenu() {
    console.log('Large menu');
    this.isLargeAsideMenu = !this.isLargeAsideMenu;
  }
}
