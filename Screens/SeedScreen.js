import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import MyHeader from '../components/MyHeader'

export default class SeedScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <MyHeader title="Seeds" navigation ={this.props.navigation}/>
        <ScrollView>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 150, marginLeft: 50 }}
              source={require('../assets/seed.jpg')}
            />
          </TouchableOpacity>
          <Text>
            BLACKSOILSEEDS • These soils are best suited for cotton crop. ... •
            Other major crops grown on the black soils include wheat, jowar,
            linseed, virginia tobacco, castor, sunflower and millets. • Rice and
            sugarcane are equally important where irrigation facilities are
            available.
          </Text>

          <Text>
            CLAYSOILSEEDS Heavy clay soils are suitable for crops like Broccoli,
            Brussels sprouts, Cabbage (red and green), Cabbage (Napa and savoy),
            Cauliflower, Kale, Bean, Pea, Potato and Daikon radish.
          </Text>

          <Text>
            REDSOILSEEDS • The red soils are mostly loamy and hence cannot
            retain water like the black soils. • The red soils, with the proper
            use of fertilizers and irrigation techniques, give good yield of
            cotton, wheat, rice, pulses, millets, tobacco, oil seeds, potatoes
            and fruits.
          </Text>
        </ScrollView>
        <ScrollView>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 150, marginLeft: 50, marginTop: 10 }}
              source={require('../assets/seed1.jpg')}
            />
          </TouchableOpacity>
          <Text>
            ಕಪ್ಪು ಮಣ್ಣಿನ ಬೆಳೆಗಳು ಈ ಮಣ್ಣು ಹತ್ತಿ ಬೆಳೆಗೆ ಸೂಕ್ತವಾಗಿರುತ್ತದೆ. ...
            ಕಪ್ಪು ಮಣ್ಣಿನಲ್ಲಿ ಬೆಳೆಯುವ ಇತರ ಪ್ರಮುಖ ಬೆಳೆಗಳಲ್ಲಿ ಗೋಧಿ, ಜೋವರ್,
            ಲಿನ್ಸೆಡ್, ವರ್ಜೀನಿಯಾ ತಂಬಾಕು, ಕ್ಯಾಸ್ಟರ್, ಸೂರ್ಯಕಾಂತಿ ಮತ್ತು ರಾಗಿ ಸೇರಿವೆ.
            ನೀರಾವರಿ ಸೌಲಭ್ಯಗಳು ಇರುವಲ್ಲಿ ಅಕ್ಕಿ ಮತ್ತು ಕಬ್ಬು ಅಷ್ಟೇ ಮುಖ್ಯ.
          </Text>

          <Text>
            ಜೇಡಿಮಣ್ಣಿನ ಬೆಳೆಗಳು ಬ್ರೊಕೊಲಿ, ಬ್ರಸೆಲ್ಸ್ ಮೊಗ್ಗುಗಳು, ಎಲೆಕೋಸು (ಕೆಂಪು
            ಮತ್ತು ಹಸಿರು), ಎಲೆಕೋಸು (ನಾಪಾ ಮತ್ತು ಸವೊಯ್), ಹೂಕೋಸು, ಕೇಲ್, ಹುರುಳಿ,
            ಬಟಾಣಿ, ಆಲೂಗಡ್ಡೆ ಮತ್ತು ಡೈಕಾನ್ ಮೂಲಂಗಿಗಳಂತಹ ಬೆಳೆಗಳಿಗೆ ಭಾರೀ ಮಣ್ಣಿನ ಮಣ್ಣು
            ಸೂಕ್ತವಾಗಿದೆ.
          </Text>

          <Text>
            ಕೆಂಪು ಮಣ್ಣಿನ ಬೆಳೆಗಳು ಕೆಂಪು ಮಣ್ಣು ಹೆಚ್ಚಾಗಿ ಲೋಮೀಯವಾಗಿರುತ್ತದೆ ಮತ್ತು
            ಆದ್ದರಿಂದ ಕಪ್ಪು ಮಣ್ಣಿನಂತೆ ನೀರನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ. ಕೆಂಪು
            ಮಣ್ಣು, ರಸಗೊಬ್ಬರ ಮತ್ತು ನೀರಾವರಿ ತಂತ್ರಗಳನ್ನು ಸರಿಯಾಗಿ ಬಳಸುವುದರಿಂದ ಹತ್ತಿ,
            ಗೋಧಿ, ಅಕ್ಕಿ, ಬೇಳೆಕಾಳುಗಳು, ರಾಗಿ, ತಂಬಾಕು, ಎಣ್ಣೆ ಬೀಜಗಳು, ಆಲೂಗಡ್ಡೆ ಮತ್ತು
            ಹಣ್ಣುಗಳ ಉತ್ತಮ ಇಳುವರಿಯನ್ನು ನೀಡುತ್ತದೆ.
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
