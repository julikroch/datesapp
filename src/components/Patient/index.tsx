import React, { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { PatientsT } from '../../typings'
import { styles } from './styles'

interface Props {
    item: PatientsT,
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    editPatient: (id: string) => void
}

const Patient: FC<Props> = ({ item, visible, setVisible, editPatient }) => {

    const { name, id } = item

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Pacient: </Text>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.buttonsContainer}>
                <Pressable
                    style={[styles.button, styles.editButton]}
                    onLongPress={() => {
                        setVisible(!visible)
                        editPatient(String(id))
                    }}
                >
                    <Text style={styles.buttonText}>Edit</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.deleteButton]}>
                    <Text style={styles.buttonText}>Delete</Text>
                </Pressable>
            </View>
        </View>
    )
}



export default Patient