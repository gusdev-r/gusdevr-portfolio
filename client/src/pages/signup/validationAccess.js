import * as yup from 'yup'

const formValidationAccess = yup.object().shape({
  usernameOrEmail: yup
    .string()
    .max(30, 'Excedeu a quantidade de caracteres.')
    .min(3, 'É necessário pelo menos 3 caracteres.')
    .matches(
      /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9]{3,})$/,
      'Deve ser um e-mail válido ou um nome de usuário.',
    )
    .required('O campo Usuário é obrigatório'),
  password: yup
    .string()
    .max(100, 'Ultrapassou o limite de caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.',
    )
    .required('O campo Senha é obrigatório'),
})

export default formValidationAccess
