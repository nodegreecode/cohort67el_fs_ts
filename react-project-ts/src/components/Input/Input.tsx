import {InputWrapper, InputLabel, InputComponent} from "./styles.ts";
import {type InputProps} from "./types.ts";

function Input({ id, name, type = "text", placeholder, label, disabled = false, error = undefined }: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <InputComponent
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        $error={error}
      />
    </InputWrapper>
  );
}

export default Input;
