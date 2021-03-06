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
    borderRadius: 4,
  },
  itemBody: {
    height: 40,
    paddingLeft: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#000000DE',
  },
  itemDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#00000099',
  }
})