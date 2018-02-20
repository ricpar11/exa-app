import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import  AppRedux from "./src/reducers/index"
import { Provider } from 'react-redux'
import { createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { ReduxNavigation } from './src/components/reduxNavigation';
import  RootContainer  from './src/components/rootContainer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const store = createStore(AppRedux, applyMiddleware(navigationMiddleware,logger,thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <RootContainer />
        </Provider>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
