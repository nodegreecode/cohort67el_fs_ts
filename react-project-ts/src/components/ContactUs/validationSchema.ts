import * as Yup from "yup";
import { CONTACT_FORM_VALUES } from "./types.ts";

export const validationSchema = Yup.object().shape({
  [CONTACT_FORM_VALUES.FULL_NAME]: Yup.string()
    .required("Full Name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be at most 50 characters"),
  [CONTACT_FORM_VALUES.PHONE]: Yup.string()
    .required("Phone number is required")
    .min(4, "Phone must be at least 4 characters")
    .max(20, "Phone must be at most 20 characters"),
  [CONTACT_FORM_VALUES.EMAIL]: Yup.string()
    .min(6, "Email must be at least 6 characters")
    .max(60, "Email must be at most 60 characters"),
});