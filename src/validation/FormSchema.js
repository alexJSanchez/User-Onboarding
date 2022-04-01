import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is required!')
        .min(3, 'username must be more then 3 characters'),
    email: yup
        .string()
        .email('must be a valid email')
        .required('email is required'),
    password: yup
        .string()
        .required('password is required')
        .min(6, 'min 6 charecters'),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept terms and conditions!'),
})

export default formSchema