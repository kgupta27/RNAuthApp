import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handleLogin = async () => {
    try {
      // Get the saved PIN from local storage
      const savedPin = await AsyncStorage.getItem('pin');

      // Check if the entered PIN matches the saved PIN
      if (pin === savedPin) {
        // PIN matched, navigate to the main app screen
        navigation.navigate('Welcome');
      } else {
        // PIN didn't match, show an error message
        Alert.alert('Login Failed', 'Invalid PIN. Please try again.');
      }
    } catch (error) {
      console.error('Error reading data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter PIN"
        secureTextEntry
        value={pin}
        onChangeText={setPin}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default LoginScreen;