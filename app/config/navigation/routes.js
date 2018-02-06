import _ from 'lodash';
import * as Screens from '../../screens/index';

export const MainRoutes = [
  {
    id: 'LoginMenu',
    title: 'Login Menu',
  }
]

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV2',
  title: 'Start',
  screen: Screens.GridV2,
  childrens: []
})

export const MenuRoutes = menuRoutes;
