import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content: {
        backgroundColor: '#6d28d9',
        flex: 1,
        position: 'relative'
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
    },
    biggerInput: {
        height: 100
    },
    dateContainer: {
        backgroundColor: '#fff',
        borderRadius: 10
    },
    cancelBtn: {
        position: 'absolute',
        right: 0,
        top: 10,
        margin: 20,
        backgroundColor: '#5827a4',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff'
    },
    cancelBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '900'
    },
    addBtn: {
        backgroundColor: '#f59e0b',
        borderRadius: 10,
        padding: 10,
        margin: 30
    },
    addBtnText: {
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: '700',
        color: '#6d28d9',
        textAlign: 'center'
    },
    errorMsg: {
        color: '#ff0000'
    }
})
