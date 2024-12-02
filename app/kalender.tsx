import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const App = () => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 86400000); // Update every 24 hours

    return () => clearInterval(timer);
  }, []);

  function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

  const markedDates = {
    [currentDate]: { selected: true, marked: true, selectedColor: 'blue' },
  };

  const handleDayPress = (day) => {
    console.log('Selected day:', day);
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={currentDate}
        markedDates={markedDates}
        onDayPress={handleDayPress}
      />
      <Text style={styles.dateText}>Tanggal Hari Ini: {currentDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;