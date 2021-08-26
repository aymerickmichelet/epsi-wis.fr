const routes = [
  { 
    path: '/', 
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'home',
        alias: '',
        name: 'home',
        component: () => import('@/pages/Home.vue')
      }
    ]
  },
]

export default routes