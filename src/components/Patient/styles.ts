import { StyleSheet } from "react-native";
import { defaultColors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomColor: defaultColors.lightGray,
        borderBottomWidth: 2
    },
    label: {
        color: defaultColors.black,
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10
    },
    text: {
        color: defaultColors.violet,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    editButton: {
        backgroundColor: defaultColors.orange
    },
    deleteButton: {
        backgroundColor: defaultColors.red
    },
    buttonText: {
        textTransform: 'uppercase', 
        fontWeight: '700',
        fontSize: 12,
        color: '#fff'
    }
})