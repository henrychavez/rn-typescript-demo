import React from 'react';
import { Provider } from 'react-redux';
import {
  Store,
  Navigator,
} from 'app/core';

export default class App extends React.Component {
  render = () => (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  )
}
