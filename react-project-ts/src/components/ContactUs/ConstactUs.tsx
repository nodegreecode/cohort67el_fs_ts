import { v4 } from "uuid";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";
import {
  ContactUsWrapper,
  ContactUsHeader,
  ContactUsMessage,
  ContactForm,
  FormControl,
  GroupControl,
} from "./styles.ts";
import {validationSchema} from "./validationSchema.ts";
import { CONTACT_FORM_VALUES } from "./types.ts";
import { useFormik } from "formik";


export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      [CONTACT_FORM_VALUES.FULL_NAME]: "",
      [CONTACT_FORM_VALUES.PHONE]: "",
      [CONTACT_FORM_VALUES.EMAIL]: "",
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ContactUsWrapper>
      <ContactUsHeader>Contact Us</ContactUsHeader>
      <ContactUsMessage>
        Send us a message and we'll respond as soon as possible.
      </ContactUsMessage>
      <ContactForm onSubmit={formik.handleSubmit}>
        <FormControl>
          <GroupControl>
            <Input
              id={v4()}
              label="Full name"
              name={CONTACT_FORM_VALUES.FULL_NAME}
              placeholder="Your full name"
              value={formik.values[CONTACT_FORM_VALUES.FULL_NAME]}
              onChange={formik.handleChange}
              error={formik.errors[CONTACT_FORM_VALUES.FULL_NAME]}
            />
          </GroupControl>
          <GroupControl>
            <Input
              id={v4()}
              label="Phone"
              name={CONTACT_FORM_VALUES.PHONE}
              placeholder="Your phone number"
              value={formik.values[CONTACT_FORM_VALUES.PHONE]}
              onChange={formik.handleChange}
              error={formik.errors[CONTACT_FORM_VALUES.PHONE]}
            />
          </GroupControl>
        </FormControl>
        <Input
          id={v4()}
          label="Email"
          name={CONTACT_FORM_VALUES.EMAIL}
          placeholder="Your email"
          value={formik.values[CONTACT_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_FORM_VALUES.EMAIL]}
        />
        <Button name="SEND REQUEST" type={"submit"} />
      </ContactForm>
    </ContactUsWrapper>
  );
}
