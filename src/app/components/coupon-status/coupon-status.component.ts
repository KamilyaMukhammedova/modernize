import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { TCouponStatus } from '../../models/coupon.model';

@Component({
  selector: 'app-coupon-status',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './coupon-status.component.html',
  styleUrl: './coupon-status.component.scss'
})
export class CouponStatusComponent {
  @Input() status!: TCouponStatus;
}
