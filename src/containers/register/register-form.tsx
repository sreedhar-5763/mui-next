"use client";

import { Formik, Form } from "formik";
import type { FormikHelpers } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TextField, Password } from "@/components/formik";
import { sleep } from "@/utils/common";

const RegisterSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is a requird field",
      })
      .min(3, { message: "Name must be at least 3 characters in length" })
      .max(64, { message: "Name must not exceed 64 characters in length" }),
    email: z
      .string({
        required_error: "Email is a required field",
      })
      .email({ message: "Invalid email address" }),
    password: z
      .string({
        required_error: "Password is a required field",
      })
      .min(8, {
        message: "Password must contain at least 8 characters in length",
      })
      .max(48, { message: "Password must not exceed 48 characters in length" }),
    confirmPassword: z.string({
      required_error: "Confirm password is a required field",
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

type InitialValues = z.infer<typeof RegisterSchema>;

const initialValues: InitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const handleSubmit = async (
  values: InitialValues,
  FormikHelpers: FormikHelpers<InitialValues>
) => {
  await sleep(5000);
  console.log({ values });
  FormikHelpers.setSubmitting(false);
  FormikHelpers.resetForm();
};

function RegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(RegisterSchema)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <Stack spacing={2}>
            <TextField name="name" label="Name" required />
            <TextField name="email" label="Email" required />
            <Password name="password" label="Password" required />
            <Password
              name="confirmPassword"
              label="Confirm password"
              required
            />
          </Stack>
          <Button
            fullWidth
            size="large"
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={{ my: 4 }}
          >
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
