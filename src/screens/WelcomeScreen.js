import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const WelcomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('fullName');
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      await AsyncStorage.removeItem('pin');

      navigation.reset({
        index: 0,
        routes: [{ name: 'Registration1' }],
      });
    } catch (error) {
      console.error('Error reading data:', error);
    }
  };

  return (
    <View style={styles.container}>
     <Text style={styles.welcomeText}>Welcome!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default WelcomeScreen;