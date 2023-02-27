import { FieldsT } from "../../typings";

export const FIELDS: FieldsT[] = [
    {
        name: 'name',
        label: "Patient name",
        placeholder: "Bolt"
    },
    {
        name: 'propietorName',
        label: "Proprietor name",
        placeholder: "Jane"
    },
    {
        name: 'propietorEmail',
        label: "Proprietor email",
        placeholder: "jane@doe.com",
        keyboard: "email-address"
    },
    {
        name: 'propietorPhone',
        label: "Proprietor phone",
        placeholder: "+54 9 11 4993-5476",
        keyboard: "numeric"
    },
    {
        name: 'patientSymptoms',
        label: "Patient symptoms",
        placeholder: "Sleeping problems",
        multiline: true,
        numberOfLines: 4
    },
]
