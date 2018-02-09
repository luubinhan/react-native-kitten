import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Keyboard,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components/gradientButton'
import {scale, scaleVertical, scaleModerate} from '../../utils/scale'

export class LoginV1 extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _renderImage(image) {
    let contentHeight = scaleModerate(375, 1);
    let height = Dimensions.get('window').height - contentHeight;
    let width = Dimensions.get('window').width;

    if (RkTheme.current.name === 'light')
      image = (<Image style={[styles.image, {height, width}]}
                      source={require('../../assets/images/backgroundLoginV1.png')}/>);
    else
      image = (<Image style={[styles.image, {height, width}]}
                      source={require('../../assets/images/backgroundLoginV1DarkTheme.png')}/>);
    return image;
  }

  render() {
    let image = this._renderImage();
    return (
      <KeyboardAvoidingView behavior='padding'>
        <View>
          <RkText rkType='h1'>Registration</RkText>
        </View>
        <View style={styles.container}>
        
          <Text>Hello</Text>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 100,
    alignItems: 'center'
  },
  screen: {
  },
  image: {
    
  },
  footer: {
   
  },
  buttons: {
  },
  button: {
  },
  save: {
  },
  textRow: {
  }
}));