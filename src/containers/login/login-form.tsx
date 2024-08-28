"use client";

import { Formik, Form } from "formik";
import type { FormikHelpers } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { TextField, Password } from "@/components/formik";
import { sleep } from "@/utils/common";
import { LoginUserClientSchema } from "@/schema/user";

type InitialValues = z.infer<typeof LoginUserClientSchema>;

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
      validationSchema={toFormikValidationSchema(LoginUserClientSchema)}
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
