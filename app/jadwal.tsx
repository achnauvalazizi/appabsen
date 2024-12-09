import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const jadwalData = [
  {
    hari: 'Senin',
    pelajaran: [
      { id: '1', mataPelajaran: 'Biologi', waktu: '08:00 - 09:30' },
      { id: '2', mataPelajaran: 'Kimia', waktu: '09:30 - 11:00' },
    ],
  },
  {
    hari: 'Selasa',
    pelajaran: [
      { id: '3', mataPelajaran: 'Matematika', waktu: '08:00 - 09:30' },
      { id: '4', mataPelajaran: 'Pendidikan Kesehatan', waktu: '09:30 - 11:00' },
    ],
  },
  {
    hari: 'Rabu',
    pelajaran: [
      { id: '5', mataPelajaran: 'Fisika', waktu: '08:00 - 09:30' },
      { id: '6', mataPelajaran: 'Bahasa Inggris', waktu: '09:30 - 11:00' },
    ],
  },
  {
    hari: 'Kamis',
    pelajaran: [
      { id: '7', mataPelajaran: 'Kimia', waktu: '08:00 - 09:30' },
      { id: '8', mataPelajaran: 'Olahraga', waktu: '09:30 - 11:00' },
    ],
  },
  {
    hari: 'Jumat',
    pelajaran: [
      { id: '9', mataPelajaran: 'Pendidikan Kesehatan', waktu: '08:00 - 09:30' },
      { id: '10', mataPelajaran: 'Matematika', waktu: '09:30 - 11:00' },
    ],
  },
  {
    hari: 'Sabtu',
    pelajaran: [
      { id: '11', mataPelajaran: 'Biologi', waktu: '08:00 - 09:30' },
      { id: '12', mataPelajaran: 'Bahasa Indonesia', waktu: '09:30 - 11:00' },
    ],
  },
];

const JadwalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jadwal SMK Kesehatan Nusantara</Text>
      <FlatList
        data={jadwalData}
        keyExtractor={(item) => item.hari}
        renderItem={({ item }) => (
          <View style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{item.hari}</Text>
            <FlatList
              data={item.pelajaran}
              keyExtractor={(pelajaran) => pelajaran.id}
              renderItem={({ item: pelajaran }) => (
                <View style={styles.item}>
                  <Text style={styles.subject}>{pelajaran.mataPelajaran}</Text>
                  <Text style={styles.time}>{pelajaran.waktu}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  item: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 3,
  },
  subject: {
    fontSize: 18,
    fontWeight: '600',
  },
  time: {
    fontSize: 16,
    color: '#555',
  },
});

export default JadwalScreen;