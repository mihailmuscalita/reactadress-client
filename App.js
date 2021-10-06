import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AdressDetailScreen from './screens/AdressDetailScreen';
import AdressScreen from './screens/AdressScreen';

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AdressScreen" component={AdressScreen} options={{ title: 'World wide adresses' }} />
    <Stack.Screen name="AdressDetailScreen" component={AdressDetailScreen} options={{ title: 'Adress details' }} />
  </Stack.Navigator>
)

export default function App() {

  return (
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  );
};
