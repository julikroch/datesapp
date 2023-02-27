import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  Pressable,
  FlatList
} from 'react-native';
import Form from './src/components/Form';
import Patient from './src/components/Patient';
import { PatientsT } from './src/typings';
import { styles } from './App.styles';

const App = () => {

  const [visible, setVisible] = useState(false)
  const [patients, setPatients] = useState<PatientsT[]>([])

  const editPatient = (id: string) => {
    console.log('editing', id)
  }

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
            return (
              <Patient
                item={item}
                editPatient={editPatient}
                setVisible={setVisible}
                visible={visible}
              />
            )
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

export default App;
