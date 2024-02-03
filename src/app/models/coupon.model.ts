export interface ICoupon {
  id: number,
  type: TCouponType,
  category: string,
  title: string,
  usage: number,
  status: TCouponStatus,
  date: string,
}

export type TCouponType = 1 | 2;
export type TCouponStatus = TCouponType;
