import React from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from '../screens/Screen';
import AdressDetailComponent from './AdressDetailComponent';

function AdressComponent({street, number, familyname, telephone}) {
    return (
        <Screen>
            <View style={styles.container}>
                <AdressDetailComponent name="Street:">{street}</AdressDetailComponent>
                <AdressDetailComponent name="Number:">{number >= 0 ? number : null}</AdressDetailComponent>
                <AdressDetailComponent name="Family name:">{familyname}</AdressDetailComponent>
                <AdressDetailComponent name="Telephone:">{telephone}</AdressDetailComponent>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 25,
        padding: 10
    }
})

export default AdressComponent;