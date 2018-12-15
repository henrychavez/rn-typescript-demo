import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";

type Styles = {
  itemContainer: ViewStyle,
  itemImage: ImageStyle,
  itemBody: ViewStyle,
  itemTitle: TextStyle,
  itemDescription: TextStyle,
  activityIndicator: ViewStyle,
};

export default StyleSheet.create<Styles>({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  itemImage: {
    width: 40,
    height: 40,
  },
  itemBody: {
    height: 40,
    paddingLeft: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    color: '#000000DE',
  },
  itemDescription: {
    fontSize: 12,
    color: '#00000099',
  },
  activityIndicator: {
    margin: 24,
  }
})