import { StyleSheet } from "react-native";
import { defaultColors } from "./src/styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f4f6',
        flex: 1,
    },
    title: {
        color: defaultColors.black,
        fontWeight: '600',
        fontSize: 32,
        textAlign: 'center'
    },
    pressable: {
        backgroundColor: defaultColors.violet,
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