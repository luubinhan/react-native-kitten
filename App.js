import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten'
import {AppLoading, Font} from 'expo';

//import {AppRoutes} from './app/config/navigation/routesBuilder';
import * as Screens from './app/screens'
import {bootstrap} from './app/config/bootstrap';
// TODO: import track from './app/config/analytics';
import {data} from './app/data'

bootstrap();
data.populateData();

import {SignUp} from './app/screens/login'
import {Screen1} from './app/screens/index'


function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

//let SideMenu = withRkTheme(Screens.SideMenu);
const MainApp = StackNavigator({
  First: {
    screen: Screens.SplashScreen
  },
  Home: {
    screen: Screens.LoginV1
  }
 
}, {
  headerMode: 'none'
})

export default class App extends React.Component {
  state = {
    loaded: false
  }
  
  componentWillMount() {
    this._loadAssets();
  }

  _loadAssets = async() => {
    await Font.loadAsync({
      'fontawesome': require('./app/assets/fonts/fontawesome.ttf'),
      'icomoon': require('./app/assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./app/assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./app/assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./app/assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./app/assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({loaded: true});
  }
  render() {
    if (!this.state.loaded) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        
        <Screens.LoginV1 />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
