import { FieldsI } from "./typings";

export const FIELDS: FieldsI[] = [
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
        placeholder: "Sleeping problems",
        multiline: true,
        numberOfLines: 4
    },
]
