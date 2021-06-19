import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import MyHeader from '../components/MyHeader'

export default class SoilScreen extends React.Component {
  render() {
    return (
      <ScrollView>
         <MyHeader title="Soil" navigation ={this.props.navigation}/>
        <ScrollView>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 150, marginLeft: 50 }}
              source={require('../assets/soil.jpg')}
            />
          </TouchableOpacity>
          <Text>
            Soils are complex mixtures of minerals, water, air, organic matter,
            and countless organisms that are the decaying remains of once-living
            things. It forms at the surface of land – it is the “skin of the
            earth.” Soil is capable of supporting plant life and is vital to
            life on earth.
          </Text>
        </ScrollView>
        <ScrollView>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 150, marginLeft: 50, marginTop: 10 }}
              source={require('../assets/soil2.jpg')}
            />
          </TouchableOpacity>
          <Text>
            ಮಣ್ಣು ಖನಿಜಗಳು, ನೀರು, ಗಾಳಿ, ಸಾವಯವ ವಸ್ತುಗಳು ಮತ್ತು ಅಸಂಖ್ಯಾತ ಜೀವಿಗಳ
            ಸಂಕೀರ್ಣ ಮಿಶ್ರಣಗಳಾಗಿವೆ, ಅವು ಒಮ್ಮೆ ಜೀವಂತ ವಸ್ತುಗಳ ಕೊಳೆಯುತ್ತಿರುವ
            ಅವಶೇಷಗಳಾಗಿವೆ. ಇದು ಭೂಮಿಯ ಮೇಲ್ಮೈಯಲ್ಲಿ ರೂಪುಗೊಳ್ಳುತ್ತದೆ - ಅದು “ಭೂಮಿಯ
            ಚರ್ಮ”. ಮಣ್ಣು ಸಸ್ಯ ಜೀವನವನ್ನು ಬೆಂಬಲಿಸುವ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೊಂದಿದೆ ಮತ್ತು
            ಭೂಮಿಯ ಮೇಲಿನ ಜೀವನಕ್ಕೆ ಅತ್ಯಗತ್ಯ.
          </Text>
        </ScrollView>
      </ScrollView>
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
    marginBottom: 20,
  },
});
