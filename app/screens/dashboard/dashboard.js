import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';


export class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard'
  };
  constructor(props) {
    super(props);
    this.data = {
      statItems: [
        {
          name: 'Stars',
          value: '4,512',
          icon: 'github',
          background: RkTheme.current.colors.dashboard.stars
        },
        {
          name: 'Tweets',
          value: '2,256',
          icon: 'twitter',
          background: RkTheme.current.colors.dashboard.tweets
        },
        {
          name: 'Likes',
          value: '1,124',
          icon: 'facebook',
          background: RkTheme.current.colors.dashboard.likes
        },
      ]
    };
  }
  
}