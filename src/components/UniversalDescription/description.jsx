import { Description } from "./style";

export default function UniversalDescription(props) {
  return (
    <>
      <Description color={props.color}>{props.children}</Description>
    </>
  );
}
