import * as yup from 'yup'

const formValidation = yup.object().shape({
  username: yup
    .string()
    .max(30, 'Excedeu a quantidade de caracteres.')
    .min(3, 'É necessário pelo menos 3 caracteres.')
    .required('O campo Usuário é obrigatório'),
  email: yup
    .string()
    .max(100, 'Ultrapassou o limite de caracteres')
    .email('Insira um e-mail válido.')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Formato de e-mail inválido, verifique os dados.',
    )
    .required('O campo E-mail é obrigatório'),
  password: yup
    .string()
    .max(100, 'Ultrapassou o limite de caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.',
    )
    .required('O campo Senha é obrigatório'),
  emailOrUsername: yup
    .string()
    .min(3, 'É necessário pelo menos 3 caracteres.')
    .max(100, 'Ultrapassou o limite de caracteres')
    .required('Este campo é obrigatório.'),
})

export default formValidation
