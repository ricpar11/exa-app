import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';


const Spinner = ({ size, loadingText, containerStyle, textStyle }) => (
    <View style={[styles.spinnerContainer, containerStyle]}>
        <ActivityIndicator size={size || 'large'} />
        <Text style={{ ...styles.textStyle, ...textStyle }}>{loadingText}</Text>
    </View>
);

const styles = {
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'gray'
    }
};

export { Spinner };
