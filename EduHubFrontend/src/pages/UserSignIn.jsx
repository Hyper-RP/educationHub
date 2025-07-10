import { useState } from "react";
import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const UserSignIn = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password: "",
    confirmPassword: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword:""
      });
    }
  }

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
            <Box component="form" noValidate sx={{ mt: 1 }}>
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
                    email: e.target.value,
                  }))
                }
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="current-email"
                autoFocus
              />
              <TextField
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

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
                onClick={(e) => submitHandler(e)}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </>
  );
};

export default UserSignIn;
