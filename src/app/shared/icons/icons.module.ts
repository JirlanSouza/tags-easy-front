import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Menu, Grid, Globe, Link2, Layers } from 'angular-feather/icons';

const icons = { Menu, Grid, Globe, Link2, Layers };

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
