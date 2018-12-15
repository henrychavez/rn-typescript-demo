import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import {
  UserListScreen,
  UserDetailScreen,
} from 'app/screens';

const stackNavigator = createStackNavigator(
  {
    UserListScreen,
    UserDetailScreen,
  },
  {
    // headerMode: 'none',
    initialRouteName: 'UserListScreen',
  },
);

export default createAppContainer(stackNavigator);
