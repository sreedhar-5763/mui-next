"use client";

import { Field } from "formik";
import type { FieldProps } from "formik";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

type Props = Omit<TextFieldProps, "name"> & {
  name: string;
};

function FormikTextField(props: Props) {
  const { name, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const hasError = meta.touched && meta.error ? true : false;
        const helperText = hasError ? meta.error : null;

        return (
          <TextField
            fullWidth
            {...rest}
            {...field}
            error={hasError}
            helperText={helperText}
          />
        );
      }}
    </Field>
  );
}

export default FormikTextField;
