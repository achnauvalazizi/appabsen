import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profil</Text>
        <View style={styles.iconContainer}>
          <Icon name="cog" size={20} color="#4B5563" style={styles.icon} />
          <Icon name="ellipsis-v" size={20} color="#4B5563" style={styles.icon} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Setelan" color="#6B7280" onPress={() => {}} />
        <Button title="Akun" color="#3B82F6" onPress={() => {}} />
      </View>

      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/aFXtqJJfJY2sWKyd80RvOXc4B27fzPZ1W1qC53WYl5ztWPwTA.jpg' }}
        />
        <Text style={styles.profileName}>high air</Text>
        <Text style={styles.profileEmail}>highair.info@gmail.com</Text>
      </View>

      <View style={styles.dataSection}>
        <Text style={styles.dataTitle}>Sinkronisasi Data</Text>
        <Text style={styles.dataText}>Terakhir di sinkronisasi: 4 menit yang lalu.</Text>
      </View>
      <View style={styles.dataSection}>
        <Text style={styles.dataTitle}>Data Absensi Kelas Tertunda</Text>
        <Text style={styles.dataText}>1 data Absensi Kelas belum tersalin.</Text>
      </View>
      <View style={styles.dataSection}>
        <Text style={styles.dataTitle}>Data Nilai Kelas Tertunda</Text>
        <Text style={styles.dataText}>1 data Nilai Kelas belum tersalin.</Text>
      </View>
      <Button title="Keluar" color="#EF4444" onPress={() => {}} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    marginLeft: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  profileEmail: {
    color: '#4B5563',
  },
  dataSection: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 16,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  dataText: {
    color: '#4B5563',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 16,
  },
});

export default ProfileScreen;