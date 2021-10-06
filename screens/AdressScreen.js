import React, { useEffect, useState } from 'react';
import { FlatList ,StyleSheet, Button, Text, View } from 'react-native';

import adressApi from '../api/adress';
import AdressRowComponent from '../components/AdressRowComponent';
import Screen from './Screen';

function AdressScreen({navigation}) {
    const [adress, setAdress] = useState([]);
    const [error, setError]   = useState(false);

    const getAdress = async () => {
        const result = await adressApi.getAdress();
        if(!result.ok) return setError(true);

        setError(false);
        setAdress(result.data);
    }
    
    useEffect( () => {
        getAdress();
    }, []);    

    const handlePress = (id) => {
        navigation.navigate("AdressDetailScreen", {id: id})
    }

    return (
        <Screen>
            {error  && ( <>
                <Text>Couldn't retrieve the adress records !</Text>
                <Button title="Try again" onPress={getAdress} />
            </>
            )}
            <View style={styles.descriptionContainer}>
                <Text style={styles.text}>Country</Text>
                <Text style={styles.text}>Region</Text>
                <Text style={styles.text}>PostalCode</Text>
            </View>
            <FlatList 
                data={adress}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({item}) => (
                    <AdressRowComponent
                        country={item.country}
                        region={item.region}
                        postalCode={item.postalCode.toString()}
                        onPress={() => handlePress(item._id)}                
                    />
                )}
            
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    descriptionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
        padding: 10,
        backgroundColor: "#f8f4f4",
        borderRadius: 25,
        marginBottom: 10
    },
    text:{
        backgroundColor: "#d3d3d3",
        padding: 15,
        fontSize: 15,
        flex: 1,
        color: "#0c0c0c",
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir"
    }
});

export default AdressScreen;