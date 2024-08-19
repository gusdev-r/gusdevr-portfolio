import * as yup from "yup";

const isEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
};

const formValidation = yup.object().shape({
  emailOrUsername: yup
    .string()
    .test(
      "email-or-username",
      "Insira um e-mail válido ou nome de usuário com ao menos 3 caracteres.",
      (value) => isEmail(value) || value.length >= 3
    )
    .required("O campo Email/Usuário é obrigatório"),
    
  password: yup
    .string()
    .max(100, "Ultrapassou o limite de caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      "A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número."
    )
    .required("O campo Senha é obrigatório"),
});

export default formValidation;
