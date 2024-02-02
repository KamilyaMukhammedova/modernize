import { ISidebarItem } from '../app/models/basics.model';

export const SIDEBAR_ITEMS : {[key: string]: ISidebarItem[]} = {
  main: [
    {
      iconPath: 'dashboard.svg',
      title: 'Dashboard',
      path: null,
    },
    {
      iconPath: 'orders.svg',
      title: 'Orders',
      path: null,
    },
    {
      iconPath: 'products.svg',
      title: 'Products',
      path: null,
    },
    {
      iconPath: 'categories.svg',
      title: 'Categories',
      path: null,
    },
    {
      iconPath: 'customers.svg',
      title: 'Customers',
      path: null,
    },
    {
      iconPath: 'reports.svg',
      title: 'Reports',
      path: null,
    },
    {
      iconPath: 'coupons.svg',
      title: 'Coupons',
      path: '/coupons',
    },
    {
      iconPath: 'chat.svg',
      title: 'Inbox',
      path: null,
    },
  ],
  otherInformation: [
    {
      iconPath: 'questions.svg',
      title: 'Knowledge Base',
      path: null,
    },
    {
      iconPath: 'ribbon.svg',
      title: 'Product Updates',
      path: null,
    },
  ],
  settings: [
    {
      iconPath: 'user.svg',
      title: 'Personal Settings',
      path: null,
    },
    {
      iconPath: 'settings.svg',
      title: 'Global Settings',
      path: null,
    },
  ],
};
