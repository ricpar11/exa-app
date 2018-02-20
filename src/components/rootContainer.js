import React from 'react';
import { View } from 'react-native';
import ReduxNavigation from './reduxNavigation'
export default class RootContainer extends React.Component {
    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <ReduxNavigation />
            </View>
        )
    }
  }