import { type ChangeEvent } from "react";
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles.ts";

function LoginForm() {
  //const [inputValue, setInputValue] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = (event: SubmitEvent) => {
    event.preventDefault();
    console.info("Email ", email);
    console.info("Password ", password);
  };

  /*const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };*/

  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={password}
          onChange={changePassword}
        />
        {/*        <input
          onChange={onChangeInputValue}
          value={inputValue}
          type="text"
          placeholder="Enter your text"
        />*/}
      </InputsContainer>
      <Button name="Login" type="submit" onClick={() => console.log("Login")} />
    </LoginFormContainer>
  );
}

export default LoginForm;
