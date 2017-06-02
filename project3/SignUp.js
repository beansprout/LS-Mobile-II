import Expo from 'expo';
import React from 'react';
import { AsyncStorage, Alert } from 'react-native';
import axios from 'axios';
import App from './main';
import { styles, Text, TextInput, View, ButtonBlue } from './Styles';
import Content from './Content';

// add to state email (empty)
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    axios.post('https://mobile-server-ii.herokuapp.com/users', {
      email: this.state.email,
      password: this.state.password,
    }).then((response) => {
      if (response.data.code === 11000) {
        return this.setState({
          error: 'Email already taken',
        });
      }
      console.log('response', response);

    AsyncStorage.setItem('token', response.data.token);
      Alert.alert(
        "Signup Success!",
        "Click the button to see the Awesomeness"
      )
      this.props.navigation.navigate('Content');
    });
  }
  render() {
    return (
      <View>
        <Text>Fill out your details and </Text>
        <Text>experience the AWESOME</Text>
      {/*} <Text>{this.state.error && this.state.error.length ? this.state.error : null}</Text> */}
        <TextInput placeholder='enter email address' autofocus='true'
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput placeholder='enter a password'
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <ButtonBlue isDisabled={this.state.email === '' ||
      this.state.password === ''} onPress={this.signUp}>
        Lay the Awesome on me
        </ButtonBlue>
      </View>
    );
  }
}

export default SignUp;

