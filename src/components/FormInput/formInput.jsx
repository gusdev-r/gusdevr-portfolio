import { FormInputContainer, Label, Input, ErrorText } from "./style";

export default function FormInput(props) {
  return (
    <>
      <FormInputContainer>
        <Label>{props.name ?? "input"}</Label>
        <Input
          name={props.name ?? "input"}
          type={props.type ?? "type"}
          value={props.value ?? "value"}
          placeholder={props.placeholder ?? "placeholder"}
          onChange={props.onChange}
          style={
            props.error
              ? {
                  borderColor: "#C90707",
                }
              : {}
          }
        />
        <ErrorText>{props.error ?? ""}</ErrorText>
      </FormInputContainer>
    </>
  );
}
