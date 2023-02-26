import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PatientsT } from '../Form/typings'

const Patient = (item: PatientsT) => {

    const {
        name,
        patientSymptoms,
        propietorEmail,
        propietorName,
        propietorPhone
    } = item

    return (
        <View>
            <Text>{name}</Text>
            <Text>{patientSymptoms}</Text>
            <Text>{propietorEmail}</Text>
            <Text>{propietorName}</Text>
            <Text>{propietorPhone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        color: 'white'
    },
})

export default Patient