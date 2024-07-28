import { Title } from "./style";

export default function UniversalTitle(props) {
  return (
    <>
      <Title> {props.children} </Title>
    </>
  );
}
