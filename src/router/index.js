import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Solutions from '@/pages/solutions';
import SolutionsView from '@/pages/solutionsView';
import SolutionsAutoMotive from '@/pages/solutions/1/index';
import Emblems from '@/pages/solutions/1/emblems';
import EntrySills from '@/pages/solutions/1/entrysills';
import SolutionsMetalParts from '@/pages/solutions/2/index';
import Brackets from '@/pages/solutions/2/brackets';
import BurnerFrame from '@/pages/solutions/2/burnerframe';
import Profiles from '@/pages/solutions/2/profiles';
import SolutionsHMI from '@/pages/solutions/3/index';
import FoilKeypads from '@/pages/solutions/3/foilkeypads';
import VasMetalKeypads from '@/pages/solutions/3/vasmetalkeypads';
import CompanyHistory from '@/pages/company/companyhistory';
import Quality from '@/pages/company/quality';
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
      path: '/solutions/2/brackets',
      name: 'Brackets',
      component: Brackets,
    },
    {
      path: '/solutions/2/burnerframe',
      name: 'BurnerFrame',
      component: BurnerFrame,
    },
    {
      path: '/solutions/2/profiles',
      name: 'Profiles',
      component: Profiles,
    },
    {
      path: '/solutions/3/index',
      name: 'SolutionsHMI',
      component: SolutionsHMI,
    },
    {
      path: '/solutions/3/vasmetalkeypads',
      name: 'VasMetalKeypads',
      component: VasMetalKeypads,
    },
    {
      path: '/solutions/3/foilkeypads',
      name: 'FoilKeypads',
      component: FoilKeypads,
    },
    {
      path: '/company/companyhistory',
      name: 'CompanyHistory',
      component: CompanyHistory,
    },
    {
      path: '/company/quality',
      name: 'Quality',
      component: Quality,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
