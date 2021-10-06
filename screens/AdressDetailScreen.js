import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';

import Screen from './Screen';
import adressDetailsApi from '../api/adressdetail';
import AdressComponent from '../components/AdressComponent';

function AdressDetailScreen({route, navigation}) {

    const [adressDetail, setAdressDetail] = useState([]);
    const { id } = route.params;

    const getAdressDetail = async (id) => {
        const result = await adressDetailsApi.getAdressDetail(id);
        if (!result.ok) return;

        setAdressDetail(result.data);
    }

    useEffect(() => {
        getAdressDetail(id.toString());
    }, []);

    return (
        <Screen>
            <Image style={styles.logo} source={require("../assets/adress.jpg")} />
            <FlatList 
                data={adressDetail}
                keyExtractor={(item) => item._id.toString()}
                renderItem={({item}) => (
                    <AdressComponent
                        street={item.street}
                        number={item.number.toString()}
                        familyname={item.familyname}
                        telephone={item.telephone}
                        onPress={() => console.log(item)}                
                    />
                )}
            
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        borderRadius: 25,
        marginBottom: 55,
        top: 15
    }
})

export default AdressDetailScreen;