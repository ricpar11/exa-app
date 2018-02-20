import React from 'react';
import { Text, View, StatusBar } from 'react-native';

const Header = ({ headerText, tintColor, titleStyle, statusBarStyle }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={{ ...viewStyle, backgroundColor: tintColor }}>
            <StatusBar barStyle={statusBarStyle} />
            <Text style={{ ...textStyle, ...titleStyle }}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };
