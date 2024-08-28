"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import type { FormikHelpers } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { TextField, Password } from "@/components/formik";
import { RegisterUserClientSchema } from "@/schema/user";
import { createUser } from "@/actions/user";

type InitialValues = z.infer<typeof RegisterUserClientSchema>;

const initialValues: InitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterForm() {
  const router = useRouter();
  const [errMsg, setErrMsg] = React.useState("");

  const handleSubmit = async (
    values: InitialValues,
    FormikHelpers: FormikHelpers<InitialValues>
  ) => {
    try {
      const { confirmPassword, ...rest } = values;
      const response = await createUser(rest);
      if (!response.success) {
        throw response.error;
      }

      router.push("/dashboard");
    } catch (error) {
      setErrMsg(error as string);
    } finally {
      FormikHelpers.setSubmitting(false);
      FormikHelpers.resetForm();
    }
  };

  return (
    <>
      {errMsg && <Alert severity="success">{errMsg}</Alert>}
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(RegisterUserClientSchema)}
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
    </>
  );
}

export default RegisterForm;
