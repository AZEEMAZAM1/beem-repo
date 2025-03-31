// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Opeen u p App.js to s tart working o n your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GameBoard from './components/GameBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Game</Text>
      <GameBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});