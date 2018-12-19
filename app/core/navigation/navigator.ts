import { createStackNavigator } from 'react-navigation';

import {
  UserListScreen,
  UserDetailScreen,
} from 'app/screens';

export default createStackNavigator(
  {
    UserListScreen,
    UserDetailScreen,
  },
  {
    // headerMode: 'none',
    initialRouteName: 'UserListScreen',
  },
);

