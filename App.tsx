import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList
} from 'react-native';
import Form from './src/components/Form';
import Patient from './src/components/Patient';
import { PatientsT } from './src/components/Form/typings';

const App = () => {

  const [visible, setVisible] = useState(false)
  const [patients, setPatients] = useState<PatientsT[]>([])

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

      {!patients
        ?
        <Text style={styles.notPatients}>Not patients yet.</Text>
        :
        <FlatList
          style={styles.patientList}
          data={patients}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            console.log({ item })
            return <Patient {...item as unknown as PatientsT} />
          }}
        />
      }

      <Form
        setPatients={setPatients}
        patients={patients}
        setVisible={setVisible}
        visible={visible}
      />
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
  },
  notPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  patientList: {
    marginTop: 50,
    marginHorizontal: 30
  }
})

export default App;
