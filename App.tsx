import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable
} from 'react-native';
import Form from './src/components/Form';

const App = () => {

  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Date Admin
      </Text>
      <Pressable
        onPress={() => setVisible(!visible)}
        style={styles.pressable}
      >
        <Text style={styles.pressableText}>
          New date
        </Text>
      </Pressable>

      <Form visible={visible} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  title: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 32,
    textAlign: 'center'
  },
  pressable: {
    backgroundColor: '#6d28d9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  pressableText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 16
  }
})

export default App;
