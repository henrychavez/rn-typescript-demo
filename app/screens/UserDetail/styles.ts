import {
  StyleSheet,
  TextStyle,
  ImageStyle,
} from 'react-native';

type Styles = {
  title: TextStyle,
  picture: ImageStyle,
};

export default StyleSheet.create<Styles>({
  title: {
    textAlign: 'center',
  },
  picture: {
    width: 120,
    height: 120,
    marginVertical: 16,
    alignSelf: 'center',
  },
});
