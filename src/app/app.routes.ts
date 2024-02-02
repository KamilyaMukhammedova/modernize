import { Routes } from '@angular/router';
import { CouponsComponent } from './pages/coupons/coupons.component';

export const routes: Routes = [
  {path: '', component: CouponsComponent},
  {path: 'coupons', component: CouponsComponent},
];
