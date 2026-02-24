import {ButtonComponent} from "./styles.ts";
import { type ButtonProps } from "./types.ts";

function Button({
  name = "Send",
  type = "button",
  onClick = () => {},
  isDelete = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} $isDelete={isDelete} type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}

export default Button;
