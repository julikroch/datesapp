import React from 'react'
import { Controller, useForm } from "react-hook-form"
import type { FormI } from './typings'
import { FIELDS } from './data'
import { styles } from './styles'
import {
    Modal,
    SafeAreaView,
    Text,
    ScrollView,
    TextInput,
    View,
    KeyboardTypeOptions,
    Pressable
} from 'react-native'

const Form = ({ visible, setVisible }: FormI) => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {

    }

    return (
        <Modal animationType="slide" visible={visible}>
            <SafeAreaView style={styles.content}>
                <ScrollView>
                    <Text style={styles.title}>New {' '}
                        <Text style={styles.boldTitle}>Date</Text>
                    </Text>

                    <Pressable
                        onPress={() => setVisible(!visible)}
                        style={styles.cancelBtn}
                    >
                        <Text style={styles.cancelBtnText}>X</Text>
                    </Pressable>

                    {FIELDS.map(field =>
                        <View key={field?.label} style={styles.inputContainer}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                name={field.label}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <Text style={styles.label}>{field.label}</Text>
                                        <TextInput
                                            style={[styles.input, field?.numberOfLines! > 1 && styles.biggerInput]}
                                            placeholder={field.placeholder}
                                            placeholderTextColor='#aaa'
                                            keyboardType={field.keyboard as KeyboardTypeOptions ?? 'default'}
                                            multiline={field.multiline ?? false}
                                            numberOfLines={field.numberOfLines ?? 1}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                        />
                                        {errors[field.label] && <Text style={styles.errorMsg}>This is required.</Text>}
                                    </>
                                )}
                            />
                        </View>
                    )}

                    <Pressable
                        style={styles.addBtn}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={styles.addBtnText}>Add</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

export default Form;
