import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter(counter + 1);
  }
  function handleMin() {
    setCounter(counter - 1);
  }
  function vynuluj() {
    setCounter(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Počítadlo objednávok</Text>
      <Text style={styles.counterText}>{counter}</Text>

      <Pressable style={counter >= 5 ? styles.pressableDisabled : styles.pressable} onPress={handleAdd} disabled={counter >= 5}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <Pressable style={counter === 0 ? styles.pressableDisabled : styles.pressable} onPress={handleMin} disabled={counter === 0}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Pressable style={styles.pressable} onPress={vynuluj}>
        <Text style={styles.buttonText}>Vynuluj</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  counterText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pressable: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    minWidth: 120,
  },
  pressableDisabled: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    minWidth: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
