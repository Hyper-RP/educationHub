import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*{}[\]|:;"'<>.?/~`_=])(?!.*[ ,()\-\+]).{8,}$/;

const GMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const UserSignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [pwd, setPwd] = useState("");
  const [errMessage, setErrMessage] = useState({
    mailError: "",
    passError: "",
    confirmPasswordError: "",
  });

  const signInHandler = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      axios
        .post("http://localhost:8080/students/RegisterStudent", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
        .then(() => toast.success("Registered"))
        .catch(() =>
          toast.error(
            formData.email + " this mail already exits, choose another mail"
          )
        );

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  function isPasswordValid(pw) {
    return PASSWORD_REGEX.test(pw);
  }

  useEffect(() => {
    setTimeout(() => {
      if (!isPasswordValid(pwd) && formData.password !== "") {
        setErrMessage((prev) => ({
          ...prev,
          passError: "Password must contain letters, numbers, a symbol",
        }));
      } else {
        setErrMessage((prev) => ({
          ...prev,
          passError: "",
        }));
      }
    }, 1000);
  }, [formData.password]);

  useEffect(() => {
    setTimeout(() => {
      if (!GMAIL_REGEX.test(formData.email) && formData.email !== "") {
        setErrMessage((prev) => ({
          ...prev,
          mailError: "Enter a valid mail address",
        }));
      } else {
        setErrMessage((prev) => ({
          ...prev,
          mailError: "",
        }));
      }
    }, 1000);
  }, [formData.email]);

  console.log("form data : " + formData.name);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              User Sign In
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={(e) => signInHandler(e)}
            >
              <TextField
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                type="text"
                autoComplete="current-name"
                autoFocus
              />

              <TextField
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value.trim(),
                  }))
                }
                margin="normal"
                required
                fullWidth
                id="email"
                label="eduhub@gmail.com"
                name="email"
                type="email"
                autoComplete="current-email"
                autoFocus
              />
              {formData.email !== "" ? (
                <span style={{ color: "red" }}>{errMessage.mailError}</span>
              ) : (
                ""
              )}
              <TextField
                value={formData.password}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                  setPwd(e.target.value);
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {formData.password !== "" ? (
                <span style={{ color: "red" }}>{errMessage.passError}</span>
              ) : (
                ""
              )}

              <TextField
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="confirmPassword"
                id="confirmPassword"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </>
  );
};

export default UserSignIn;
