import {StatusBar, StyleSheet} from 'react-native';
import {RkTheme} from 'react-native-ui-kitten';
import {KittenTheme} from './theme';
import {scale, scaleModerate, scaleVertical} from '../utils/scale';

export let bootstrap = () => {
  RkTheme.setTheme(KittenTheme, null);
  
}