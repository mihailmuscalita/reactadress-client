import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({name, ...otherProps}) {
    return (
        <View style={styles.imageContainer}>
            <MaterialCommunityIcons name={name} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 2,
        paddingRight: 2
    }
})

export default Icon;