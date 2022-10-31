export const SidebarDetails = [
  {
    title: 'Main',
    items: [
      {
        icon: require('../assets/overview-icon.png'),
        name: 'Overview',
        route: 'overview',
      },
    ],
  },
  {
    title: 'Payments',
    items: [
      {
        icon: require('../assets/all-payments.png'),
        name: 'All Payments',
        route: 'dummy/all_payments',
      },
      {
        icon: require('../assets/reconciled-payments.png'),
        name: 'Reconciled Payments',
        route: 'dummy/reconciled_payments',
      },
      {
        icon: require('../assets/unreconciled-payments.png'),
        name: 'Un-Reconciled Payments',
        route: 'dummy/unreconciled_payments',
      },
      {
        icon: require('../assets/manual-settlement.png'),
        name: 'Manual Settlement',
        route: 'dummy/manual_settlements',
      },
    ],
  },
  {
    title: 'Orders',
    items: [
      {
        icon: require('../assets/all-orders.png'),
        name: 'All Orders',
        route: 'dummy/all_orders',
      },
      {
        icon: require('../assets/pending-orders.png'),
        name: 'Pending Orders',
        route: 'dummy/pending_orders',
      },
      {
        icon: require('../assets/reconciled-orders.png'),
        name: 'Reconciled Orders',
        route: 'dummy/reconciled_orders',
      },
    ],
  },
  {
    title: '',
    items: [
      {
        icon: require('../assets/merchant-profile.png'),
        name: 'Merchant Profile',
        route: 'dummy/merchant_profile',
      },
    ],
  },
];
