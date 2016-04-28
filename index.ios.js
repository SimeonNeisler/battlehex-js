/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

import Auth0Lock from 'react-native-lock';

class Battlehex extends Component {
  constructor(props) {
    super(props);
    this.lock = new Auth0Lock({clientId: '1sSkRR588YOSj5pNPt9pHIC9M7JMTMBA', domain: 'battlehex.auth0.com'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles2.gameTitle}>
          BattleHex
        </Text>
        <Text style={styles2.Login}>
          Email:
        </Text>
        <Text/>
        <Text style={styles2.Login}>
          Password:
        </Text>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style = {{width: 50, height: 50}} />
      </View>
    );
  }

  componentDidMount() {
    this.lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(profile);
      console.log(token);
      // Authentication worked!
      console.log('Logged in with Auth0!');
    });

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const styles2 = StyleSheet.create({
    gameTitle: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
    },
    Login: {
      fontSize: 16,
      textAlign: 'left',
      alignItems: 'flex-start',
      marginBottom: 2,
    },
})

AppRegistry.registerComponent('Battlehex', () => Battlehex);
