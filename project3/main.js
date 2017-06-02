import Expo from 'expo';
import React, {Component} from 'react';
import {StyleSheet, AsyncStorage } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import SignUp from './SignUp';
import Content from './Content';
import  { styles, Text, View, ButtonBlue } from './Styles'

class Home extends Component {
  constructor(props) {
    super(props);
  }

// componentDidMount() {
//   const showStorage = AsyncStorage.getAllKeys((error, storage) => {
//     console.log(showStorage)
//   })
// }

// the navigationOptions are where you define the title of the screen (from StackNavigator)
// define home screen title
static navigationOptions = {
  title: 'Welcome'
};

componentWillMount() {
    AsyncStorage
      .getItem('token')
      .then((token) => {
        // this.props.navigation.navigate('Content');
      });
  };
  render() {
    return (
      <View>
      <Text>Do you want to sign up</Text>
      <Text>for AWESOMENESS?</Text>
     <ButtonBlue onPress={() => {this.props.navigation.navigate('SignUp')}}>
        Yes please!!
      </ButtonBlue>
      </View>
    )
  }
};

const App = StackNavigator({
  Home: { screen: Home },
  Content: { screen: Content },
  SignUp: { screen: SignUp},
});

Expo.registerRootComponent(App);
