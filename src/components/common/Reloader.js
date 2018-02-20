import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


const Reloader = ({ text, containerStyle, textStyle, iconSize, iconColor, onPress }) => (
    <TouchableOpacity style={[styles.container, containerStyle]}>
        <TouchableOpacity onPress={onPress} style={{ alignItems: 'center' }}>
            <Icon name='cw' size={iconSize} color={iconColor} />
            <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>
        </TouchableOpacity>
    </TouchableOpacity>
);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'gray',
    }
};

export { Reloader };
