"use client";

import { Formik, Form } from "formik";
import type { FormikHelpers } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TextField, Password } from "@/components/formik";
import { sleep } from "@/utils/common";

const LoginSchema = z.object({
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
});

type InitialValues = z.infer<typeof LoginSchema>;

const initialValues: InitialValues = {
  email: "",
  password: "",
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

function LoginForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(LoginSchema)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <Stack spacing={2}>
            <TextField name="email" label="Email" required />
            <Password name="password" label="Password" required />
          </Stack>
          <Button
            fullWidth
            size="large"
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={{ my: 4 }}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
