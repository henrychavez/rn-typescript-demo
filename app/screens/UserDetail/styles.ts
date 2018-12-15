import {
  StyleSheet,
  TextStyle,
  ImageStyle,
} from 'react-native';

type Styles = {
  name: TextStyle,
  location: TextStyle,
  picture: ImageStyle,
};

export default StyleSheet.create<Styles>({
  name: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#000000DE',
    textAlign: 'center',
  },
  location: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#00000099',
    textAlign: 'center',
    marginVertical: 8,
  },
  picture: {
    width: 120,
    height: 120,
    marginVertical: 16,
    alignSelf: 'center',
  },
});
