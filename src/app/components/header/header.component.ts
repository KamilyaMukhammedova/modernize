import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzHeaderComponent } from 'ng-zorro-antd/layout';
import { NzFlexDirective } from 'ng-zorro-antd/flex';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NzHeaderComponent,
    NzFlexDirective,
    NzIconDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
