import {
  StyleSheet,
  ViewStyle,
} from "react-native";

type Styles = {
  screen: ViewStyle,
  activityIndicator: ViewStyle,
};

export default StyleSheet.create<Styles>({
  screen: {
    height: '100%',
    backgroundColor: 'white',
  },
  activityIndicator: {
    margin: 24,
  }
})