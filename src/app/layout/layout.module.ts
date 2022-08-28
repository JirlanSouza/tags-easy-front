import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { IconsModule } from '../shared/icons/icons.module';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [HeaderComponent, AsideMenuComponent, LayoutComponent, MenuItemComponent],
  imports: [CommonModule, IconsModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
