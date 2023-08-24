import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Registration1Screen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  // const handleContinue = () => {
  //   navigation.navigate('Registration2', { fullName, email });
  // };

  const handleContinue = async () => {
    if (fullName.trim() === '' || email.trim() === '') {
      Alert.alert('Validation Error', 'Both fields are required');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    try {
      // Save values to local storage
      // await AsyncStorage.setItem('fullName', fullName);
      // await AsyncStorage.setItem('email', email);

      // Navigate to the next page
      navigation.navigate('Registration2', { fullName, email });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const validateEmail = (inputEmail) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(inputEmail);
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
      <Button title="Continue" onPress={handleContinue} />
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

export default Registration1Screen;