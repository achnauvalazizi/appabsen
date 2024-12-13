import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Picker, TouchableOpacity } from 'react-native';

const AttendanceApp = () => {
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState('Kelas X KEPERAWATAN');
  const [attendanceList, setAttendanceList] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('Hadir');

  const handleAttendanceSubmission = () => {
    if (name.trim()) {
      const newAttendance = {
        id: Date.now().toString(),
        name,
        class: selectedClass,
        status: selectedStatus,
      };
      setAttendanceList((prevList) => [...prevList, newAttendance]);
      setName('');
    }
  };

  const renderAttendanceItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{`No. ${index + 1}: ${item.name} - ${item.class}`}</Text>
      <Text style={styles.status}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar kehadiran / Absensi</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <Picker
        selectedValue={selectedClass}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedClass(itemValue)}
      >
        <Picker.Item label="Kelas X KEPERAWATAN" value="Kelas X KEPERAWATAN" />
        <Picker.Item label="Kelas X FARMASI" value="Kelas X FARMASI" />
        <Picker.Item label="Kelas XI KEPERAWATAN" value="Kelas XI KEPERAWATAN" />
        <Picker.Item label="Kelas XI FARMASI" value="Kelas XI FARMASI" />
        <Picker.Item label="Kelas XII KEPERAWATAN" value="Kelas XII KEPERAWATAN" />
        <Picker.Item label="Kelas XII FARMASI" value="Kelas XII FARMASI" />
      </Picker>
      <Picker
        selectedValue={selectedStatus}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedStatus(itemValue)}
      >
        <Picker.Item label="Hadir" value="Hadir" />
        <Picker.Item label="Alpa" value="Alpa" />
        <Picker.Item label="Izin" value="Izin" />
        <Picker.Item label="Sakit" value="Sakit" />
      </Picker>
      <Button title="Kirim Daftar Hadir" onPress={handleAttendanceSubmission} />
      <FlatList
        data={attendanceList}
        renderItem={renderAttendanceItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
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
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  item: {
    fontSize: 18,
  },
  status: {
    fontSize: 18,
    color: 'green',
  },
  list: {
    marginTop: 20,
  },
});

export default AttendanceApp;