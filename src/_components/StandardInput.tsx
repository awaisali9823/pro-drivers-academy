"use client";
import React, { forwardRef } from "react";
import { TextField } from "@mui/material";
import { localFontSize } from "@/utils/themes";

interface StandardInputProps {
  label?: string;
  inputLabel?: string;
  inputType?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  rows?: number;
  multiline?: boolean;
}

const StandardInput = forwardRef<HTMLInputElement, StandardInputProps>(
  (
    {
      label = "Enter text",
      inputLabel,
      inputType = "text",
      value,
      onChange,
      onBlur,
      error = false,
      helperText = "",
      rows = 1,
      multiline,
      ...rest
    },
    ref
  ) => {
    const isMultiline = multiline ?? rows > 1;

    return (
      <TextField
        fullWidth
        type={inputType}
        label={inputLabel ?? label}
        variant="outlined"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        multiline={isMultiline}
        rows={isMultiline ? rows : undefined}
        InputLabelProps={{
          sx: {
            left: "8px",
            color: "#00000080",
            fontSize: localFontSize.p1,
            "&.Mui-focused": {
              color: "#00000080",
            },
          },
        }}
        InputProps={{
          inputRef: ref,
        }}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "34px",
            height: isMultiline ? "auto" : "60px",
            color: "#00000080",
            fontSize: localFontSize.p1,
            "& fieldset": {
              borderColor: "#00000080",
            },
            "&:hover fieldset": {
              borderColor: "#00000080",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#192227",
            },
          },
          "& .MuiInputBase-input": {
            padding: "0 16px",
          },
          "& .MuiFormHelperText-root": {
            marginLeft: "20px",
          },
        }}
        {...rest}
      />
    );
  }
);

StandardInput.displayName = "StandardInput";

export default StandardInput;
