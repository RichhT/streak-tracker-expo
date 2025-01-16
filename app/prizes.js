import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function PrizesScreen() {
  const prizes = [
    { id: '1', days: 5, reward: 'Homework Pass' },
    { id: '2', days: 10, reward: 'Lunch with Teacher' },
    { id: '3', days: 20, reward: 'School Spirit T-shirt' },
    { id: '4', days: 50, reward: 'Principal for a Day' },
    { id: '5', days: 100, reward: 'Special Recognition Award' },
  ];

  const renderPrize = ({ item }) => (
    <View style={styles.prizeItem}>
      <View style={styles.daysContainer}>
        <Text style={styles.daysNumber}>{item.days}</Text>
        <Text style={styles.daysText}>DAYS</Text>
      </View>
      <Text style={styles.rewardText}>{item.reward}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={prizes}
        renderItem={renderPrize}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  prizeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  daysContainer: {
    alignItems: 'center',
    marginRight: 16,
    width: 60,
  },
  daysNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  daysText: {
    fontSize: 12,
    color: '#666',
  },
  rewardText: {
    fontSize: 18,
    flex: 1,
  },
});