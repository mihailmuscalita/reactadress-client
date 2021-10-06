import React from 'react';
import { View, StyleSheet } from 'react-native';

import TextAdressDetailComponent from './TextAdressDetailComponent';

function AdressDetailComponent({name, children}) {
    return (
        <View style={styles.container}>
            <TextAdressDetailComponent name={name}>{children}</TextAdressDetailComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 5
    }
})

export default AdressDetailComponent;