import React from 'react';
import  { Text, StyleSheet, View } from 'react-native';

function TextAdressDetailComponent({name, children}) {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.textLabel}>{name}</Text>
            <View style={styles.textChildrenContainer}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textChildrenContainer:{
        textAlign: 'center'
    },
    textContainer: {
        flexDirection: 'row',
        backgroundColor: "#fc5c65",
        borderRadius: 15,
        padding:15,
        alignItems: 'center',
        marginBottom: 10
    },
    textLabel: {
        fontSize: 15,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    },
    text:{
        paddingLeft: 25
    }
})

export default TextAdressDetailComponent;