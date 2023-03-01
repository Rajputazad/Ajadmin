import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  // {
  //   name: 'Users',
  //   url: '/users',
  //   iconComponent: { name: 'cil-user' }
  // },
  // {
  //   name: 'Theme Selection',
  //   url: '/custom-theme',
  //   iconComponent: { name: 'cil-drop' }
  // },
  {
    name: 'Car_Informations',
    url: '/addinfo',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'Car_details',
    url: '/add-assets',
    iconComponent: { name: 'cil-inbox' }
  },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   iconComponent: { name: 'cil-puzzle' },
  //   children: [
  //     {
  //       name: 'Accordion',
  //       url: '/base/accordion'
  //     },
    
  //   ]
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];
