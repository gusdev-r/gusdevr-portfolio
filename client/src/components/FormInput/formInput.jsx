import React from "react";
import { FormInputContainer, Label, Input, ErrorText } from "./style";

export default function FormInput({
  type,
  label,
  placeholder,
  errors,
  register,
  registerName,
  ref,
}) {
  return (
    <FormInputContainer>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(registerName)}
        red={ref}
      />
      {errors[registerName] && (
        <ErrorText>{errors[registerName].message}</ErrorText>
      )}{" "}
    </FormInputContainer>
  );
}
