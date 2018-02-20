import React from 'react';
import { View } from 'react-native';

const Separator = ({ containerStyle, separatorStyle }) => (
    <View style={[styles.container, containerStyle]}>
        <View style={[styles.separator, separatorStyle]} />
    </View>
);

const styles = {
    container: {
        flexDirection: 'row',
        height: 1,
        backgroundColor: 'black'
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: 'white'
    }
};

export { Separator };
