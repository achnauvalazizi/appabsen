import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>LOG IN</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          secureTextEntry 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Lupa Password" 
          secureTextEntry 
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.socialLogin}>
          <Text style={styles.footerText}>Login dengan akun!</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => console.log('Login with Google')}>
              <FontAwesome name="google" size={24} color="red" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Login with Facebook')}>
              <FontAwesome name="facebook" size={24} color="blue" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 320,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38a169',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#38a169',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#38a169',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#718096',
  },
  link: {
    color: '#38a169',
    fontWeight: 'bold',
  },
  socialLogin: {
    marginTop: 16,
    alignItems: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default LoginScreen;


