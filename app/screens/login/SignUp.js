import React from 'react';
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
//import {GradientButton} from '../../components/'

export class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <View>
          <Text>Registration</Text>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType='rounded' placeholder='Name' />
            <RkTextInput rkType='rounded' placeholder='Email' />
            <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true} />
            <RkButton style={styles.save} 
              rkType='large'
              text='SIGN UP'
              onPress={() => {
                this.props.navigation.goBack()
              }}
            />
          </View>
          <View style={styles.footer}>
              <View style={styles.textRow}>
                <RkText>Already have an account?</RkText>
              </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = RkStyleSheet.create( theme => ({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base
  },
  content: {
    justifyContent: 'space-between'
  },
  save: {
    marginVertical: 20
  },
  footer: {
    justifyContent: 'flex-end'
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
}))