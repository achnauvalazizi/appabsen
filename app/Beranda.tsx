import React from 'react';
import { Text, View, Image, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beranda</Text>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/hIyP7G9WhfxTaCe3V2oIPQiXhyfpnm0dMy1ezEUJwQ7L1ZAPB.jpg' }}
        />
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <View style={styles.iconGrid}>
          {['book', 'lock', 'calendar', 'envelope', 'bell', 'user'].map((icon, index) => (
            <TouchableOpacity key={index} style={styles.iconContainer}>
              <Text style={styles.icon}>{`📚`}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>MASUK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: width * 0.9, // Mengatur lebar card menjadi 90% dari lebar layar
    maxWidth: 400, // Maksimal lebar card
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28, // Ukuran font yang lebih kecil
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20, // Ukuran font yang lebih kecil
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#BBDEFB',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: 80,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  button: {
    backgroundColor: '#42A5F5',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;