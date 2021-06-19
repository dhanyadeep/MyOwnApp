import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import MyHeader from '../components/MyHeader'

export default class FertilizerScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <MyHeader title="Fertilizers" navigation ={this.props.navigation}/>
        <ScrollView>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 150, marginLeft: 50 }}
              source={require('../assets/fer2.jpg')}
            />
          </TouchableOpacity>
          <Text>
            A fertilizer is an material of natural or synthetic origin that is
            applied to soil or to plant tissues to supply plant nutrient
            Fertilizers may be distinct from liming materials or other
            non-nutrient soil amendments. Many sources of fertilizer exist, both
            natural and industrially produced.[1] For most modern agricultural
            practices, fertilization focuses on three main macro nutrients:
            Nitrogen (N), Phosphorus (P), and Potassium (K) with occasional
            addition of supplements like rock dust for micronutrients. Farmers
            apply these fertilizers in a variety of ways: through dry or
            pelletized or liquid application processes, using large agricultural
            equipment or hand-tool methods.s Historically fertilization came
            from natural or organic sources: compost, animal manure, human
            manure, harvested minerals, crop rotations and byproducts of
            human-nature industries (i.e. fish processing waste, or bloodmeal
            from animal slaughter). However, starting in the 19th century, after
            innovations in plant nutrition, an agricultural industry developed
            around synthetically created fertilizers.
          </Text>
        </ScrollView>
        <ScrollView>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 150, marginLeft: 50, marginTop: 10 }}
              source={require('../assets/fer3.jpg')}
            />
          </TouchableOpacity>
          <Text>
            ರಸಗೊಬ್ಬರವು ನೈಸರ್ಗಿಕ ಅಥವಾ ಸಂಶ್ಲೇಷಿತ ಮೂಲದ ವಸ್ತುವಾಗಿದ್ದು, ಸಸ್ಯ
            ಪೋಷಕಾಂಶಗಳನ್ನು ಪೂರೈಸಲು ಮಣ್ಣಿಗೆ ಅಥವಾ ಸಸ್ಯ ಅಂಗಾಂಶಗಳಿಗೆ ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ
            ರಸಗೊಬ್ಬರಗಳು ಸೀಮಿತಗೊಳಿಸುವ ವಸ್ತುಗಳು ಅಥವಾ ಇತರ ಪೋಷಕಾಂಶಗಳಲ್ಲದ ಮಣ್ಣಿನ
            ತಿದ್ದುಪಡಿಗಳಿಂದ ಭಿನ್ನವಾಗಿರಬಹುದು. ರಸಗೊಬ್ಬರದ ಅನೇಕ ಮೂಲಗಳು
            ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ, ಅವು ನೈಸರ್ಗಿಕ ಮತ್ತು ಕೈಗಾರಿಕಾ ಉತ್ಪಾದನೆಯಾಗಿದೆ. [1]
            ಹೆಚ್ಚಿನ ಆಧುನಿಕ ಕೃಷಿ ಪದ್ಧತಿಗಳಿಗಾಗಿ, ಫಲೀಕರಣವು ಮೂರು ಪ್ರಮುಖ ಸ್ಥೂಲ
            ಪೋಷಕಾಂಶಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ: ಸಾರಜನಕ (ಎನ್), ರಂಜಕ (ಪಿ), ಮತ್ತು
            ಪೊಟ್ಯಾಸಿಯಮ್ (ಕೆ) ಸಾಂದರ್ಭಿಕವಾಗಿ ಸೂಕ್ಷ್ಮ ಪೋಷಕಾಂಶಗಳಿಗೆ ರಾಕ್ ಧೂಳಿನಂತಹ
            ಪೂರಕಗಳನ್ನು ಸೇರಿಸುತ್ತವೆ. ರೈತರು ಈ ರಸಗೊಬ್ಬರಗಳನ್ನು ವಿವಿಧ ರೀತಿಯಲ್ಲಿ
            ಅನ್ವಯಿಸುತ್ತಾರೆ: ಒಣ ಅಥವಾ ಉಂಡೆ ಅಥವಾ ದ್ರವ ಅನ್ವಯಿಕ ಪ್ರಕ್ರಿಯೆಗಳ ಮೂಲಕ,
            ದೊಡ್ಡ ಕೃಷಿ ಉಪಕರಣಗಳು ಅಥವಾ ಕೈ-ಸಾಧನ ವಿಧಾನಗಳನ್ನು ಬಳಸಿ. ಐತಿಹಾಸಿಕವಾಗಿ
            ಫಲೀಕರಣವು ನೈಸರ್ಗಿಕ ಅಥವಾ ಸಾವಯವ ಮೂಲಗಳಿಂದ ಬಂದಿದೆ: ಕಾಂಪೋಸ್ಟ್, ಪ್ರಾಣಿ
            ಗೊಬ್ಬರ, ಮಾನವ ಗೊಬ್ಬರ, ಕೊಯ್ಲು ಮಾಡಿದ ಖನಿಜಗಳು, ಬೆಳೆ ತಿರುಗುವಿಕೆಗಳು ಮತ್ತು
            ಮಾನವ-ಪ್ರಕೃತಿ ಕೈಗಾರಿಕೆಗಳ ಉಪಉತ್ಪನ್ನಗಳು (ಅಂದರೆ ಮೀನು ಸಂಸ್ಕರಣೆ ತ್ಯಾಜ್ಯ,
            ಅಥವಾ ಪ್ರಾಣಿಗಳ ವಧೆಯಿಂದ ರಕ್ತದೊತ್ತಡ). ಆದಾಗ್ಯೂ, 19 ನೇ ಶತಮಾನದಿಂದ
            ಪ್ರಾರಂಭಿಸಿ, ಸಸ್ಯ ಪೋಷಣೆಯಲ್ಲಿನ ಆವಿಷ್ಕಾರಗಳ ನಂತರ, ಕೃತಕವಾಗಿ ರಚಿಸಲಾದ
            ರಸಗೊಬ್ಬರಗಳ ಸುತ್ತ ಕೃಷಿ ಉದ್ಯಮವು ಅಭಿವೃದ್ಧಿಗೊಂಡಿತು.
          </Text>
        </ScrollView>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
 title: {
    backgroundColor: '#020c53',
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'algi',
    marginBottom:20,
  },
})
