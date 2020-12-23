import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Solutions from '@/pages/solutions';
import SolutionsView from '@/pages/solutionsView';
import Company from '@/pages/company';
import Contact from '@/pages/contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: Solutions,
    },
    {
      path: '/solutions/:id?',
      name: 'SolutionsView',
      component: SolutionsView,
    },
    {
      path: '/company/:id',
      name: 'Company',
      component: Company,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
