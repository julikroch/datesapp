import React from 'react';
import {
    Modal,
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    View,
    KeyboardTypeOptions
} from 'react-native';

interface FormI {
    visible: boolean;
}

interface FieldsI {
    label: string
    placeholder: string
    keyboard?: string

}

const FIELDS: FieldsI[] = [
    {
        label: "Patient name",
        placeholder: "Bolt"
    },
    {
        label: "Propertier name",
        placeholder: "Jane"
    },
    {
        label: "Propertier email",
        placeholder: "jane@doe.com",
        keyboard: "email-address"
    },
    {
        label: "Propertier phone",
        placeholder: "+54 9 11 4993-5476",
        keyboard: "numeric"
    },
    {
        label: "Patient synthomps",
        placeholder: "Sleeping problems"
    },
]

const Form = ({ visible }: FormI) => {
    return (
        <Modal animationType="slide" visible={visible}>
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    <Text style={styles.title}>New {''}
                        <Text style={styles.boldTitle}>Date</Text>
                    </Text>

                    {FIELDS.map(field =>
                        <View key={field?.label} style={styles.inputContainer}>
                            <Text style={styles.label}>{field.label}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={field.placeholder}
                                placeholderTextColor='#aaa'
                                keyboardType={field.keyboard as KeyboardTypeOptions ?? 'default'}
                            />
                        </View>
                    )}
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#6d28d9',
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30
    },
    boldTitle: {
        fontWeight: '900'
    },
    inputContainer: {
        marginVertical: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15
    }
})

export default Form;
