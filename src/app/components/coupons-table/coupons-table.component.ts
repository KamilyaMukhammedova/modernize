import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NzTableComponent, NzTableModule, NzTdAddOnComponent, NzThSelectionComponent } from 'ng-zorro-antd/table';
import { NzPaginationComponent } from 'ng-zorro-antd/pagination';
import { ICoupon } from '../../models/coupon.model';
import { CouponTypeComponent } from '../coupon-type/coupon-type.component';
import { CouponStatusComponent } from '../coupon-status/coupon-status.component';

@Component({
  selector: 'app-coupons-table',
  standalone: true,
  imports: [
    NzTableModule,
    NzThSelectionComponent,
    NgForOf,
    NzTdAddOnComponent,
    NzTableComponent,
    NzPaginationComponent,
    CouponTypeComponent,
    CouponStatusComponent
  ],
  templateUrl: './coupons-table.component.html',
  styleUrl: './coupons-table.component.scss'
})
export class CouponsTableComponent {
  @Input() listOfData!: ICoupon[];
  checked = false;
  totalNumber = 120;
  setOfCheckedId = new Set<number>();

  onItemChecked(id: number, checked: boolean) {
    this.updateCheckedSet(id, checked);
  }

  updateCheckedSet(id: number, checked: boolean) {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onAllChecked(checked: boolean) {
    this.listOfData.forEach(({ id }) => this.updateCheckedSet(id, checked));
  }
}
