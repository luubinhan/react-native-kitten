import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten'
import {AppLoading, Font} from 'expo';

import {AppRoutes} from './app/config/navigation/routesBuilder';
import * as Screens from './app/screens'
import {bootstrap} from './app/config/bootstrap';
// TODO: import track from './app/config/analytics';
//TODO: import {data} from './app/data'

bootstrap();
//TODO data.populateData();

import {SignUp} from './app/screens/login'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
