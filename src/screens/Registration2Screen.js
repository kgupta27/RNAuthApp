import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registration2Screen = ({ route, navigation }) => {
  const { fullName: passedFullName, email: passedEmail } = route.params;

  const [fullName, setFullName] = useState(passedFullName || '');
  const [email, setEmail] = useState(passedEmail || '');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [pin, setPin] = useState('');

  const handleRegister = async () => {
    if (fullName.trim() === ''  || email.trim() === ''  || password.trim() === '' || reenteredPassword.trim() === '' || pin.trim() === '') {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }

    if (password !== reenteredPassword) {
      Alert.alert('Validation Error', 'Passwords do not match');
      return;
    }

    try {
      // Save user data to local storage
      await AsyncStorage.setItem('fullName', fullName);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('pin', pin);

      // Navigate to the Login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={styles.container}>
       <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Re-Enter Password"
        secureTextEntry
        value={reenteredPassword}
        onChangeText={setReenteredPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="PIN"
        secureTextEntry
        value={pin}
        onChangeText={setPin}
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegister} />
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

export default Registration2Screen;