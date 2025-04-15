"use client";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import StandardInput from "./StandardInput";
import { localFontSize } from "@/utils/themes";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  package: string;
  message: string;
}

export default function ContactUsForm() {
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      package: "",
      message: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      // Simulate API call or processing
      toast.success("Form submitted successfully!");
      reset();
      setSelectedPackage("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Submission failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {
    toast.error("Please fill all required fields correctly.");
  };

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectedPackage(value);
    setValue("package", value, { shouldValidate: true });
  };

  return (
    <Box
      sx={{
        padding: {
          xs: "40px 20px",
          sm: "40px 40px",
          md: "50px 60px",
          lg: "80px 100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1536px",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", sm: "30px", md: "40px", lg: "40px", xl: "80px" },
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{
            height: { xs: "348px", md: "499px", lg: "517px" },
            maxWidth: { md: "400px", lg: "530px", xl: "600px" },
            width: "100%",
          }}
        >
          <iframe
            style={{ height: "100%", width: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76130.2389396486!2d-1.5818554603242845!3d53.395688287712964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790aa9fae8be15%3A0x3e2827f5af06b078!2sSheffield%2C%20UK!5e0!3m2!1sen!2s!4v1744275140990!5m2!1sen!2s"
            width="600"
            height="450"
          ></iframe>
        </Box>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          style={{ width: "100%" }}
        >
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "12px", md: "22px" },
            }}
          >
            <StandardInput
              inputType="text"
              label="Full Name"
              {...register("fullName", { required: "Full name is required" })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />

            <StandardInput
              inputType="email"
              label="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <StandardInput
              inputType="number"
              label="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must contain digits only",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />

            <FormControl fullWidth error={!!errors.package}>
              <InputLabel
                id="dropdown-label"
                sx={{
                  left: "8px",
                  color: "#00000080",
                  fontSize: localFontSize.p1,
                  "&.Mui-focused": {
                    color: "#00000080",
                  },
                }}
              >
                Select driving lesson package
              </InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedPackage}
                label="Package"
                onChange={handleChange}
                sx={{
                  borderRadius: "34px",
                  height: "60px",
                  color: "#00000080",
                  fontSize: localFontSize.p1,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00000080",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00000080",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#192227",
                  },
                  "& .MuiSelect-select": {
                    padding: "0 16px",
                  },
                }}
              >
                <MenuItem value="">Select Package</MenuItem>
                <MenuItem value="basic">Basic Package</MenuItem>
                <MenuItem value="standard">Standard Package</MenuItem>
                <MenuItem value="premium">Premium Package</MenuItem>
              </Select>
              <FormHelperText>{errors.package?.message}</FormHelperText>
            </FormControl>

            <StandardInput
              rows={6}
              inputType="text"
              label="Message"
              {...register("message", { required: "Message is required" })}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          </Box>

          <CustomButton
            type="submit"
            btnText="Send"
            sx={{ width: "140px", marginTop: { xs: "30px", md: "45px" } }}
            loading={loading}
          />
        </form>
      </Box>
    </Box>
  );
}
