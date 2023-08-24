import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Registration1Screen from './src/screens/Registration1Screen';
import Registration2Screen from './src/screens/Registration2Screen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

const Routes = () => {

    const [initialRoute, setInitialRoute] = useState(null);

    const checkLocalStorage = async () => {
        try {
          // Check if the required data is present in local storage
          const pin = await AsyncStorage.getItem('pin');
          console.log('pin: ', pin)
      
          // Return the appropriate screen name based on the data presence
          return pin ? 'Login' : 'Registration1';
        } catch (error) {
          console.error('Error reading data:', error);
          return 'Registration1'; // Default to Registration1 if an error occurs
        }
      };

    useEffect(() => {
        checkLocalStorage().then((routeName: any) => {
            setInitialRoute(routeName);
        });
    }, []);

    if (initialRoute === null) {
        // Wait for initialRoute to be determined
        return null;
    }

  return (
    <>
   <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Registration1" component={Registration1Screen} />
        <Stack.Screen name="Registration2" component={Registration2Screen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default Routes;

