import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Search from '~/pages/Search';

const stackNavigator = createStackNavigator({
  Login,
  Search,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#14465e',
      elevation: 0,
    },
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      fontWeight: 'normal',
    },
    headerTintColor: '#FFF',
  },
});

export default createAppContainer(stackNavigator);
