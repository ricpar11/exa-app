import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { setCustomRouteActionCreator } from "../actions/actions";

class SplashScreen extends React.Component {
    static navigationOptions = {
        header: {
            visible: false,
        }
    }
    componentDidMount(){
        // this.props.dispatch(setCustomRouteActionCreator('MainScreenNavigator'));
        setTimeout(() => this.props.dispatch({type:'Navigation/BACK'}))
    }

    render() {
        return <Text>Hello world!</Text>
    }
}

export default connect()(SplashScreen)
