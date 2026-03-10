import { LoginFormContainer, Title, InputsContainer } from "./styles.ts";
//import { type ChangeEvent } from "react";
import { LOGIN_FORM_VALUES } from "./types.ts";
import { type FormikValues, useFormik } from "formik";
import * as Yup from "yup";
//import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const validationSchema = Yup.object().shape({
  [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
    .required("Email field is required")
    .email("This field should be in email format!"),
  [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
    .required("Password field is required")
    .min(5, "Password field should contain min 5 characters")
    .max(20, 'Password field should contain max 20 characters"'),
});

function LoginForm() {
  /*  const [email, setEmail] = useState<string>("");
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
  };*/

  const formik = useFormik<FormikValues>({
    initialValues: {
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log("Formik submit event works!");
      console.log(values, helpers);
      helpers.resetForm();
    },
  });

  console.log(formik);

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          type="text"
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>
      <Button name="Login" type="submit" onClick={() => console.log("Login")} />
    </LoginFormContainer>
  );
}

export default LoginForm;
