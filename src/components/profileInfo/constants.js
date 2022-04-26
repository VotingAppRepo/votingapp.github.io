import * as Yup from 'yup';

export const initialValues = {
    username: '',
    files: [],
}
  
export const EditProfileValues = [
    {
        label: "Нікнейм",
        name: "username",
        type: "name"
    },
    {
        label: "Аватар",
        name: "image",
        type: "image",
        multiple: false
    }
]

export const validationSchema = Yup.object({
    username: Yup.string()
            .required('Обов`язкове поле')
            .min(3, 'Мінімум 3 символи.'),
})