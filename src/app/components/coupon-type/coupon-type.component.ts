import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { TCouponType } from '../../models/coupon.model';

@Component({
  selector: 'app-coupon-type',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './coupon-type.component.html',
  styleUrl: './coupon-type.component.scss'
})
export class CouponTypeComponent {
  @Input() type!: TCouponType;
}
