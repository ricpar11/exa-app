import React from 'react';
import { createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from './routes'
import { connect } from 'react-redux';

const ReduxNavigation = (props) => {
    const addListener = createReduxBoundAddListener('root')
    const { dispatch, nav } = props
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
   })
   
   return <AppNavigator navigation={navigation} />
  }
  const mapStateToProps = state => ({ nav: state.nav })
  export default connect(mapStateToProps)(ReduxNavigation)
  