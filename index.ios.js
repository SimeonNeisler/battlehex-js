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

import init from './src/init.js';

const {authController} = init();

{/*var initPromise = new Promise(function(resolve, reject) {
  init();
  if (data) {
    authController = data.authController;
    resolve('Data returned.');
  }
  else {
    reject(console.log(err));
  }
});*/}


class Battlehex extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles2.gameTitle}>
          BattleHex
        </Text>

      </View>
    );
  }

  componentDidMount() {
      authController.login();
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
    logoutButton: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    logoutButtonText: {
      fontSize: 16,
      textAlign: 'center',
    }
})

AppRegistry.registerComponent('Battlehex', () => Battlehex);
