import React from 'react';

import {
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import {
  NavigationScreenOptions,
  NavigationScreenProps,
} from 'react-navigation';

import { CoreState } from 'app/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  State,
  Actions,
  actions,
} from './store';
import styles from './styles';

type Params = {
  picture: { large: string, medium: string, thumbnail: string },
  name: { first: string, last: string },
  location: { street: string, state: string },
};

class Screen extends React.Component<State & Actions & NavigationScreenProps<Params>> {
  static navigationOptions: NavigationScreenOptions = {
    title: 'User Details',
  };
  componentDidMount() {
    const name = this.props.navigation.getParam('name');
    const picture = this.props.navigation.getParam('picture');
    const location = this.props.navigation.getParam('location');
    this.props.setName(name);
    this.props.setPicture(picture);
    this.props.setLocation(location);
  }
  renderPicture = () => (!!this.props.picture &&
    <Image
      style={styles.picture}
      source={{ uri: this.props.picture }}
    />
  )
  renderName = () => (
    <Text style={styles.name}>
      {this.props.name}
    </Text>
  )
  renderLocation = () => (
    <Text style={styles.location}>
      {this.props.location}
    </Text>
  )
  render = () => (
    <SafeAreaView>
      {this.renderPicture()}
      {this.renderName()}
      {this.renderLocation()}
    </SafeAreaView>
  )
}

const mapStateToProps = (state: CoreState) => state.userDetail;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const UserDetailScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);
