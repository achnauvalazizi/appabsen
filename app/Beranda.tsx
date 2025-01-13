import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Beranda = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di</Text>
      <Text style={styles.subtitle}>Aplikasi Absensi</Text>
      <Text style={styles.schoolName}>SMK Kesehatan Nusantara</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CekAbsensi')}
        >
          <Ionicons name="checkmark-done" size={20} color="#fff" />
          <Text style={styles.buttonText}>Cek Absensi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RiwayatAbsensi')}
        >
          <Ionicons name="calendar" size={20} color="#fff" />
          <Text style={styles.buttonText}>Riwayat Absensi</Text>
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
    backgroundColor: '#f0f0f5', // Warna latar lebih lembut
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 24,
    color: '#555',
    marginTop: 5,
  },
  schoolName: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#777',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4caf50', // Warna hijau untuk tombol
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10, // Memberikan jarak antara ikon dan teks
    fontWeight: 'bold',
  },
});

export default Beranda;
