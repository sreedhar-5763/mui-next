"use client";

import * as React from "react";
import { Field } from "formik";
import type { FieldProps } from "formik";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import type { OutlinedInputProps } from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = Omit<OutlinedInputProps, "name"> & {
  name: string;
};

function FormikPassword(props: Props) {
  const { name, label, required, ...rest } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const hasError = meta.touched && meta.error ? true : false;
        const helperText = hasError ? meta.error : null;

        return (
          <FormControl variant="outlined">
            {label && (
              <InputLabel
                htmlFor={`${name}-adornment-password`}
                required={required}
                error={hasError}
              >
                {label}
              </InputLabel>
            )}
            <OutlinedInput
              id={`${name}-adornment-password`}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              fullWidth
              {...rest}
              {...field}
              label={label}
              error={hasError}
            />
            {helperText && <FormHelperText error>{helperText}</FormHelperText>}
          </FormControl>
        );
      }}
    </Field>
  );
}

export default FormikPassword;
