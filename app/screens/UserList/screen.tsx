import React from 'react'
import {
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {
  NavigationScreenOptions,
  NavigationScreenProps,
} from 'react-navigation';
import { SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CoreState } from 'app/core';

import { List } from './components';
import {
  State,
  Actions,
  actions,
  getSortedUsers
} from './store';
import styles from './styles';

class Screen extends React.Component<State & Actions & NavigationScreenProps> {
  static navigationOptions: NavigationScreenOptions = {
    title: 'User List',
  };
  componentDidMount() {
    this.props.loadUsers();
  }
  loadMoreUsers = () => {
    if (!!this.props.term) { return; }

    this.props.loadUsers();
  }
  goToDetail = (item) => {
    this.props.navigation.navigate({
      routeName: 'UserDetailScreen',
      params: item,
    });
  }
  renderHeader = () => (
    <SearchBar
      lightTheme
      placeholder='Search'
      onChangeText={this.props.updateTerm}
      clearIcon={{ color: '#999', name: 'close' }}
      inputStyle={{ backgroundColor: 'white' }}
    />
  );
  renderActivityIndicator = () => (this.props.isLoding &&
    <ActivityIndicator style={styles.activityIndicator} />
  )
  renderList = () => (
    <List
      data={this.props.users}
      onEndReached={this.loadMoreUsers}
      onItemPress={this.goToDetail}
    />
  )
  render = () => (
    <SafeAreaView>
      {this.renderHeader()}
      {this.renderActivityIndicator()}
      {this.renderList()}
    </SafeAreaView>
  )
}

const mapStateToProps = (state: CoreState) => ({
  ...state.userList,
  users: getSortedUsers(state),
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export const UserListScreen = connect(mapStateToProps, mapDispatchToProps)(Screen);
