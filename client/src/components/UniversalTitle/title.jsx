import { Title } from "./style";

export default function UniversalTitle(props) {
  return (
    <>
      <Title color={props.color}> {props.children} </Title>
    </>
  );
}
