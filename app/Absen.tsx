import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Picker, TouchableOpacity } from 'react-native';

const AttendanceApp = () => {
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState('Class A');
  const [attendanceList, setAttendanceList] = useState([]);

  const handleAttendanceSubmission = () => {
    if (name.trim()) {
      const newAttendance = {
        id: Date.now().toString(),
        name,
        class: selectedClass,
        present: false,
      };
      setAttendanceList((prevList) => [...prevList, newAttendance]);
      setName('');
    }
  };

  const toggleAttendance = (id) => {
    setAttendanceList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, present: !item.present } : item
      )
    );
  };

  const renderAttendanceItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{`No. ${index + 1}: ${item.name} - ${item.class}`}</Text>
      <TouchableOpacity
        style={[styles.button, item.present ? styles.present : styles.absent]}
        onPress={() => toggleAttendance(item.id)}
      >
        <Text style={styles.buttonText}>{item.present ? 'Present' : 'Absent'}</Text>
      </TouchableOpacity>
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
  button: {
    padding: 10,
    borderRadius: 5,
  },
  present: {
    backgroundColor: 'green',
  },
  absent: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    marginTop: 20,
  },
});

export default AttendanceApp;