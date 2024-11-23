import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>PROFILE</Text>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/aFXtqJJfJY2sWKyd80RvOXc4B27fzPZ1W1qC53WYl5ztWPwTA.jpg' }}
        />
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        
        <View style={styles.iconGrid}>
          {[
            { key: 'book', emoji: '📚', label: 'Buku' },
            { key: 'calendar', emoji: '📅', label: 'Kalender' },
            { key: 'class', emoji: '🏫', label: 'Kelas' },
            { key: 'subjectSchedule', emoji: '🗒️', label: 'Jadwal' },
            { key: 'studentList', emoji: '👥', label: 'Daftar Siswa' },
            { key: 'settings', emoji: '⚙️', label: 'Pengaturan' },
          ].map((item) => (
            <TouchableOpacity key={item.key} style={styles.iconContainer}>
              <Text style={styles.icon}>{item.emoji}</Text>
              <Text style={styles.iconLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: width * 0.9,
    maxWidth: 400, 
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
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
    fontSize: 20,
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
    backgroundColor: '#38a169',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: 80,
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
  iconLabel: {
    marginTop: 5, 
    fontSize: 14, 
    textAlign: 'center',
  },
});

export default HomeScreen;