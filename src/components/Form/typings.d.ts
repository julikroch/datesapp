export type FormT = {
    visible: boolean
    patients: PatientsT[]
    setPatients: React.Dispatch<React.SetStateAction<PatientsT[]>>
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export type FieldsT = {
    name: string
    label: string
    placeholder: string
    keyboard?: string
    multiline?: boolean
    numberOfLines?: number
}

export type PatientsT = {
    id: number
    name: string
    propietorName: string
    propietorEmail: string
    propietorPhone: string
    patientSymptoms: string
}