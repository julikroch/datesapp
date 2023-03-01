import React from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import type { FormT, PatientsT } from '../../typings';
import { FIELDS } from './data';
import { styles } from './styles';
import {
    Modal,
    SafeAreaView,
    Text,
    ScrollView,
    TextInput,
    View,
    KeyboardTypeOptions,
    Pressable,
} from 'react-native';

const Form = ({
    visible,
    setVisible,
    setPatients,
    setPatient,
    patients,
    patient
}: FormT) => {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: PatientsT) => {
        if (!data.id) {
            const newPatient = { ...data, id: Date.now() }
            setPatients([...patients, newPatient])
        } else {
            const updatePatients = patients.map(item => item?.id === data.id ? data : item)
            setPatients(updatePatients)
            setPatient(undefined)
        }

        reset({ data: {} })
        setVisible(!visible)
    }

    return (
        <Modal animationType="slide" visible={visible}>
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    <Text style={styles.title}>
                        New <Text style={styles.boldTitle}>Date</Text>
                    </Text>

                    <Pressable
                        onPress={() => {
                            setVisible(!visible)
                            setPatient(undefined)
                        }}
                        style={styles.cancelBtn}
                    >
                        <Text style={styles.cancelBtnText}>X</Text>
                    </Pressable>

                    {FIELDS.map(field => (
                        <View key={field?.name} style={styles.inputContainer}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                name={field.name}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <Text style={styles.label}>{field.label}</Text>
                                        <TextInput
                                            style={[
                                                styles.input,
                                                (field?.numberOfLines !== undefined && field?.numberOfLines > 1) && styles.biggerInput,
                                            ]}
                                            placeholder={field.placeholder}
                                            placeholderTextColor="#aaa"
                                            keyboardType={
                                                (field.keyboard as KeyboardTypeOptions) ?? 'default'
                                            }
                                            multiline={field.multiline ?? false}
                                            numberOfLines={field.numberOfLines ?? 1}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={patient ? patient[field.name as keyof PatientsT] : value}
                                        />
                                        {errors[field.name] && (
                                            <Text style={styles.errorMsg}>This field is required.</Text>
                                        )}
                                    </>
                                )}
                            />
                        </View>
                    ))}

                    <Pressable style={styles.addBtn} onPress={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
                        <Text style={styles.addBtnText}>Add</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

export default Form;
