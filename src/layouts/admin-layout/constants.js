import * as Yup from 'yup';

export const initialValues = {
    name: '',
    files: [],
}
  
export const CreateModelValues = [
    {
        label: "Ім`я моделі",
        name: "name",
        type: "name"
    },
    {
        label: "Фото",
        name: "image",
        type: "image",
        multiple: true
    }
]

export const adminTabs = [
    'Керування користувачами',
    'Керування моделями',
    'Зареєструвати модель'
]

export const validationSchema = Yup.object({
    name: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Мінімум 3 символи.'),
    files: Yup.array().min(1, 'Обов`язкове поле')
})