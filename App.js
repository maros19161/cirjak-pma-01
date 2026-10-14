import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native/types_generated/index';
import { TextInput } from 'react-native/types_generated/index';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);


  function inputTextHandler(text) {
    setInputText = text;
  }
  function addHandler() {
    setTaskList([...taskList, text]);
  }
  return (
    <>
    <View style={styles.container}>
      <TextInput onChangeText={inputTextHandler}
        style={styles.input}
        placeholder='Zadaj úlohu ...'
      />
      <Button onPress={addHandler} title='ADD' />
      <Text>Projekt PMA</Text>
      <StatusBar style="auto" />
    </View>
    <View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
