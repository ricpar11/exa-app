import React from 'react';
import { View } from 'react-native';

import { ReloadRow } from './ReloadRow';
import { LoadingRow } from './LoadingRow';

const LoadRetryRow = ({ showRetry, showLoading, retryText, loadingText, onReloadPress }) => {
        if (showRetry) {
            return (
                <ReloadRow
                    containerStyle={{ paddingLeft: 5, backgroundColor: '#ff9c00' }}
                    iconSize={30}
                    iconColor='white'
                    text={retryText}
                    textStyle={{ color: 'white' }}
                    onPress={onReloadPress}
                />
            );
        } else if (showLoading) {
            return (
                <LoadingRow
                    containerStyle={{ paddingLeft: 5, backgroundColor: '#007bff' }}
                    indicatorColor='white'
                    text={loadingText}
                    textStyle={{ color: 'white' }}
                />
            );
        }
        return <View />;
};

export { LoadRetryRow };
