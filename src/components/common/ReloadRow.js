import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ReloadRow = ({ containerStyle, iconSize, iconColor, text, textStyle, onPress }) => (
    <View style={[styles.containerStyle, containerStyle]}>
        <TouchableOpacity onPress={onPress}>
            <Icon name='cw' style={styles.icon} size={iconSize} color={iconColor} />
        </TouchableOpacity>
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
    icon: {
        marginRight: 5
    }
};

export { ReloadRow };
