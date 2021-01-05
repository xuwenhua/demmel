import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Solutions from '@/pages/solutions';
import SolutionsView from '@/pages/solutionsView';
import SolutionsAutoMotive from '@/pages/solutions/1/index';
import Emblems from '@/pages/solutions/1/emblems';
import EntrySills from '@/pages/solutions/1/entrysills';
import SolutionsMetalParts from '@/pages/solutions/2/index';
import SolutionsHMI from '@/pages/solutions/3/index';
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
      path: '/solutions/1/index',
      name: 'SolutionsAutoMotive',
      component: SolutionsAutoMotive,
    },
    {
      path: '/solutions/1/emblems',
      name: 'Emblems',
      component: Emblems,
    },
    {
      path: '/solutions/1/entrysills',
      name: 'EntrySills',
      component: EntrySills,
    },
    {
      path: '/solutions/2/index',
      name: 'SolutionsMetalParts',
      component: SolutionsMetalParts,
    },
    {
      path: '/solutions/3/index',
      name: 'SolutionsHMI',
      component: SolutionsHMI,
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
