import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const LoadingRow = ({ containerStyle, text, textStyle, indicatorColor }) => (
    <View style={[styles.containerStyle, containerStyle]}>
        <ActivityIndicator style={styles.indicator} color={indicatorColor} />
        <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </View>
);

const styles = {
    containerStyle: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: 'bold'
    },
    indicator: {
        marginRight: 5
    }
};

export { LoadingRow };
