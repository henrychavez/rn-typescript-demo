import React from 'react';
import {
  FlatList,
  FlatListProps,
} from 'react-native';

import { ListItem } from '../ListItem';

type Props = {
  data: any[],
  onEndReached: () => void;
  onItemPress: (item) => void;
};

export class List extends React.Component<Props> {
  keyExtractor = item => item.id;
  handleItemPress = item => () => this.props.onItemPress(item);
  renderItem = ({ item }) => (
    <ListItem
      picture={item.picture}
      name={item.name}
      phone={item.phone}
      // or {...item}
      onPress={this.handleItemPress(item)}
    />
  )
  render = () => (
    <FlatList
      data={this.props.data}
      renderItem={this.renderItem}
      keyExtractor={this.keyExtractor}
      onEndReached={this.props.onEndReached}
      onEndReachedThreshold={1}
    />
  )
}
