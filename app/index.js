import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [streak, setStreak] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.streakContainer}>
        <Text style={styles.streakNumber}>{streak}</Text>
        <Text style={styles.streakText}>Day Streak!</Text>
      </View>
      <TouchableOpacity 
        style={styles.scanButton}
        onPress={() => setStreak(streak + 1)}
      >
        <Text style={styles.scanButtonText}>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  streakContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streakNumber: {
    fontSize: 120,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  streakText: {
    fontSize: 24,
    color: '#666',
  },
  scanButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});