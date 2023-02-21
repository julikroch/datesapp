export type FormI = {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export type FieldsI = {
    label: string
    placeholder: string
    keyboard?: string
    multiline?: boolean
    numberOfLines?: number
}