import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';

import styles from './styles';

type Props = {
  picture: { large: string, medium: string, thumbnail: string },
  name: { first: string, last: string },
  phone: string,
  onPress: () => void;
};

export const ListItem: React.SFC<Props> = props => (
  <TouchableOpacity
    style={styles.itemContainer}
    activeOpacity={0.65}
    onPress={props.onPress}
  >
    <Image
      style={styles.itemImage}
      source={{ uri: props.picture.thumbnail }}
    />
    <View style={styles.itemBody}>
      <Text style={styles.itemTitle}>
        {props.name.last}, {props.name.first}
      </Text>
      <Text style={styles.itemDescription}>
        {props.phone}
      </Text>
    </View>
  </TouchableOpacity>
)