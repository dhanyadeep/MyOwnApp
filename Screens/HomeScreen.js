import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import FertilizerScreen from './FertilizerScreen';
import MyHeader from '../components/MyHeader';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="FRIENDLY FARMER" navigation={this.props.navigation} />
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('FertilizerScreen');
            }}>
            <Text style={styles.buttonText}>Fertilizers/ಗೊಬ್ಬರ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('PesticideScreen');
            }}>
            <Text style={styles.buttonText}>Pesticides/ಕೀಟನಾಶಕ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('SeedScreen');
            }}>
            <Text style={styles.buttonText}>Seeds/ಬೀಜಗಳು</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('SoilScreen');
            }}>
            <Text style={styles.buttonText}>Soil/ ಮಣ್ಣು</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    backgroundColor: '#020c53',
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'algi',
  },
  button: {
    backgroundColor: '#FFCA3D',
    width: 200,
    height: 50,
    textAlign: 'center',
    marginLeft: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#020C53',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign:'center',
    justifyContent:'center',
  },
});
