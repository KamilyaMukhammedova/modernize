import { Component } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTabChangeEvent, NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { NzSelectComponent } from 'ng-zorro-antd/select';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzSpaceItemDirective } from 'ng-zorro-antd/space';
import { COUPONS } from '../../../constants/mockCouponsData';
import { ICoupon } from '../../models/coupon.model';
import { CouponsTableComponent } from '../../components/coupons-table/coupons-table.component';


@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [
    NzButtonComponent,
    NzIconDirective,
    NzTabSetComponent,
    NzTabComponent,
    NzSelectComponent,
    NzInputGroupComponent,
    NzSpaceItemDirective,
    NzInputDirective,
    CouponsTableComponent
  ],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss'
})
export class CouponsComponent {
  couponsArr: ICoupon[] = COUPONS;

  getCurrentTab(tab: NzTabChangeEvent) {
    switch (tab.index) {
      case 0:
        this.couponsArr = COUPONS;
        break;
      case 1:
        this.couponsArr = COUPONS.filter(item => item.status === 1);
        console.log(this.couponsArr)
        break;
      case 2:
        this.couponsArr = COUPONS.filter(item => item.status === 2);
        break;
      default:
        this.couponsArr = COUPONS;
    }
  }
}
