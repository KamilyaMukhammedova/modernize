import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzContentComponent, NzLayoutComponent, NzSiderComponent } from 'ng-zorro-antd/layout';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';
import { HeaderComponent } from '../header/header.component';
import { SIDEBAR_ITEMS } from '../../../constants/sidebarItems';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzContentComponent,
    NzIconDirective,
    NzLayoutComponent,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSiderComponent,
    HeaderComponent,
    NgForOf,
    RouterLink,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  items = SIDEBAR_ITEMS;

  getItemPath(iconPath: string) {
    return `assets/icons/${iconPath}`;
  }
}
