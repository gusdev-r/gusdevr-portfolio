import { Button } from "./style";

export default function UniversalButton(props) {
  return (
    <>
      <Button
        type="submit"
        onClick={() =>
          props.onClick ? props.onClick() : console.log("clicked")
        }
      >
        {props.children}
      </Button>
    </>
  );
}
