import { Component, Input, OnInit } from '@angular/core';

const menuItemsData = [
  {
    id: Math.floor(Math.random() * 100),
    iconName: 'Grid',
    name: 'Overview',
    selected: false,
  },
  {
    id: Math.floor(Math.random() * 100),
    iconName: 'Globe',
    name: 'OPC servers',
    selected: true,
  },
  {
    id: Math.floor(Math.random() * 100),
    iconName: 'Layers',
    name: 'Nodered instances',
    selected: false,
  },

  {
    id: Math.floor(Math.random() * 100),
    iconName: 'Link2',
    name: 'Tags',
    selected: false,
  },
];

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  @Input() isLarge: boolean = false;
  items = menuItemsData;

  constructor() {}

  ngOnInit(): void {}

  selectMenuItem(id: number) {
    console.log(id);
    this.items.forEach((item) => {
      if (item.id === id) {
        item.selected = true;
        return;
      }

      item.selected = false;
    });
  }
}
