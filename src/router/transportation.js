import CategoryList from '../views/transportation/CategoryList.vue';
import TransportationModeList from '../views/transportation/TransportModeList.vue';

export const transportRoute = [
  {
    path: '/transportation/category',
    name: 'transportation-category',
    component: CategoryList,
  },
  {
    path: '/transportation/mode',
    name: 'transportation-mode',
    component: TransportationModeList,
  },
];
