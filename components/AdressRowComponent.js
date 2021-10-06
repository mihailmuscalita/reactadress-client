import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import Icon from './Icon';
import TextComponent from './TextComponent';

function AdressRowComponent({country, region, postalCode, onPress}) {
    return (
        <TouchableWithoutFeedback style={styles.feedbackContainer} onPress={onPress}>
            <View style={styles.container}>
                <TextComponent>{country}</TextComponent>
                <TextComponent>{region}</TextComponent>
                <TextComponent>{postalCode}</TextComponent>
                <Icon name="arrow-right" size={22} color="black" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f4f4",
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15
        
    }
})

export default AdressRowComponent;