import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Beranda = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi Absensi</Text>
      <Text style={styles.subtitle}>SMK Kesehatan Nusantara</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Cek Absensi" 
          onPress={() => navigation.navigate('CekAbsensi')} 
        />
        <Button 
          title="Riwayat Absensi" 
          onPress={() => navigation.navigate('RiwayatAbsensi')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
  },
});

export default Beranda;