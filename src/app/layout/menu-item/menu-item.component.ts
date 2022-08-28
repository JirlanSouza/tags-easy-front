import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() large!: boolean;
  @Input() iconName!: string;
  @Input() name!: string;
  @Output() selectItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
