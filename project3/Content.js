import React, { Component } from 'react';
import { AsyncStorage, ListView } from 'react-native';
import { Text, View } from './Styles';
import axios from 'axios';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      };
  }

  static navigationOptions = {
    title: 'Content',
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => {
      axios.get('https://mobile-server-ii.herokuapp.com/users', {
        headers: {
          authorization: token,
        }
        }).then((response) => {
          console.log('response: ', response);
          const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            users: ds.cloneWithRows (response.data),
          });
          }).catch((error) => {
          console.log(error);
        });
    });
  }

  render() {
    if (this.state.users === null) return null;
    return (
      <View>
        <Text>Here is an AWESOME list of gibberish!!</Text>
        <ListView
          dataSource={this.state.users}
          renderRow={(user) => <Text>{user.email}
          </Text>}
        />
      </View>
    );
  }
}
