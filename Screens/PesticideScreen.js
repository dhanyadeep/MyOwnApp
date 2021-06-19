import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import MyHeader from '../components/MyHeader'

export default class PesticideScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <MyHeader title="Pesticides" navigation ={this.props.navigation}/>
        <ScrollView>
          <TouchableOpacity>
            <Image
              style={{ width: 100, height: 150, marginLeft: 50 }}
              source={require('../assets/fer3.jpg')}
            />
          </TouchableOpacity>
          <Text>
            Pesticides are substances that are meant to control pests.[1] The
            term pesticide includes all of the following: herbicide,
            insecticides (which may include insect growth regulators,
            termiticides, etc.) nematicide, molluscicide, piscicide, avicide,
            rodenticide, bactericide, insect repellent, animal repellent,
            antimicrobial, and fungicide.[2] The most common of these are
            herbicides which account for approximately 80% of all pesticide
            use.[3] Most pesticides are intended to serve as plant protection
            products (also known as crop protection products), which in general,
            protect plants from weeds, fungi, or insects. As an example, the
            fungus Alternaria is used to combat the aquatic weed Salvinia. In
            general, a pesticide is a chemical (such as carbamate) or biological
            agent (such as a virus, bacterium, or fungus) that deters,
            incapacitates, kills, or otherwise discourages pests. Target pests
            can include insects, plant pathogens, weeds, molluscs, birds,
            mammals, fish, nematodes (roundworms), and microbes that destroy
            property, cause nuisance, or spread disease, or are disease vectors.
            Along with these benefits[ pesticides also have drawbacks, such as
            potential toxicity to humans and other species.
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
            ಕೀಟನಾಶಕಗಳು ಕೀಟಗಳನ್ನು ನಿಯಂತ್ರಿಸಲು ಉದ್ದೇಶಿಸಿರುವ ವಸ್ತುಗಳು. [1] ಕೀಟನಾಶಕ
            ಎಂಬ ಪದವು ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಒಳಗೊಂಡಿದೆ: ಸಸ್ಯನಾಶಕ, ಕೀಟನಾಶಕಗಳು (ಕೀಟಗಳ
            ಬೆಳವಣಿಗೆಯ ನಿಯಂತ್ರಕಗಳು, ಟರ್ಮಿನಿಸೈಡ್ಗಳು ಇತ್ಯಾದಿಗಳನ್ನು ಒಳಗೊಂಡಿರಬಹುದು)
            ನೆಮ್ಯಾಟಿಸೈಡ್, ಮೃದ್ವಂಗಿ, ಪಿಸ್ಸೈಡ್, ಅವಿಸೈಡ್, ದಂಶಕನಾಶಕ,
            ಬ್ಯಾಕ್ಟೀರಿಯಾನಾಶಕ, ಕೀಟ ನಿವಾರಕ, ಪ್ರಾಣಿ ನಿವಾರಕ, ಆಂಟಿಮೈಕ್ರೊಬಿಯಲ್ ಮತ್ತು
            ಶಿಲೀಂಧ್ರನಾಶಕ. [2. ] ಕೀಟನಾಶಕಗಳ ಬಳಕೆಯಲ್ಲಿ ಸುಮಾರು 80% ನಷ್ಟು ಸಸ್ಯನಾಶಕಗಳು
            ಇವುಗಳಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿದೆ. [3] ಹೆಚ್ಚಿನ ಕೀಟನಾಶಕಗಳನ್ನು ಸಸ್ಯ ಸಂರಕ್ಷಣಾ
            ಉತ್ಪನ್ನಗಳಾಗಿ (ಬೆಳೆ ಸಂರಕ್ಷಣಾ ಉತ್ಪನ್ನಗಳು ಎಂದೂ ಕರೆಯುತ್ತಾರೆ)
            ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಉದ್ದೇಶಿಸಲಾಗಿದೆ, ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಸಸ್ಯಗಳನ್ನು ಕಳೆ,
            ಶಿಲೀಂಧ್ರಗಳು ಅಥವಾ ಕೀಟಗಳಿಂದ ರಕ್ಷಿಸುತ್ತದೆ. ಉದಾಹರಣೆಯಾಗಿ, ಜಲವಾಸಿ ಕಳೆ
            ಸಾಲ್ವಿನಿಯಾವನ್ನು ಎದುರಿಸಲು ಆಲ್ಟರ್ನೇರಿಯಾ ಎಂಬ ಶಿಲೀಂಧ್ರವನ್ನು
            ಬಳಸಲಾಗುತ್ತದೆ. ಸಾಮಾನ್ಯವಾಗಿ, ಕೀಟನಾಶಕವು ರಾಸಾಯನಿಕ (ಕಾರ್ಬಮೇಟ್ ನಂತಹ) ಅಥವಾ
            ಜೈವಿಕ ದಳ್ಳಾಲಿ (ಉದಾಹರಣೆಗೆ ವೈರಸ್, ಬ್ಯಾಕ್ಟೀರಿಯಂ ಅಥವಾ ಶಿಲೀಂಧ್ರ)
            ಕೀಟಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುತ್ತದೆ, ಅಸಮರ್ಥಗೊಳಿಸುತ್ತದೆ, ಕೊಲ್ಲುತ್ತದೆ ಅಥವಾ
            ನಿರುತ್ಸಾಹಗೊಳಿಸುತ್ತದೆ. ಟಾರ್ಗೆಟ್ ಕೀಟಗಳಲ್ಲಿ ಕೀಟಗಳು, ಸಸ್ಯ ರೋಗಕಾರಕಗಳು,
            ಕಳೆಗಳು, ಮೃದ್ವಂಗಿಗಳು, ಪಕ್ಷಿಗಳು, ಸಸ್ತನಿಗಳು, ಮೀನು, ನೆಮಟೋಡ್ಗಳು
            (ರೌಂಡ್‌ವರ್ಮ್‌ಗಳು), ಮತ್ತು ಆಸ್ತಿಯನ್ನು ನಾಶಪಡಿಸುವ, ಉಪದ್ರವವನ್ನು ಉಂಟುಮಾಡುವ
            ಅಥವಾ ರೋಗ ಹರಡುವ ಸೂಕ್ಷ್ಮಜೀವಿಗಳು ಅಥವಾ ರೋಗ ವಾಹಕಗಳಾಗಿವೆ. ಈ ಪ್ರಯೋಜನಗಳ
            ಜೊತೆಗೆ [ಕೀಟನಾಶಕಗಳು ಮಾನವರಿಗೆ ಮತ್ತು ಇತರ ಜಾತಿಗಳಿಗೆ ಸಂಭವನೀಯ ವಿಷತ್ವದಂತಹ
            ನ್ಯೂನತೆಗಳನ್ನು ಸಹ ಹೊಂದಿವೆ.
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
