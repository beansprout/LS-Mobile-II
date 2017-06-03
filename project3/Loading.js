import React, { Component } from 'React';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loading extends Component {
  constructor(props) {
    super();
    this.state = {
      visible: false
    };
  }

  /* eslint react/no-did-mount-set-state: 0 */
  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 3000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      </View>
    );
  }
}

