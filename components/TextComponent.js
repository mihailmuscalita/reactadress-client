import React from 'react';
import { Text,StyleSheet, View } from 'react-native';

function TextComponent({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
       backgroundColor: "#d3d3d3",
       padding: 15,
       width: "100%",
       fontSize: 15,
       color: "#0c0c0c",
       fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
})

export default TextComponent;