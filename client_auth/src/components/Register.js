import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate hook
import API from "../api"; // Import the API instance
import "../index.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required.";
    } else if (!passwordRegex.test(formData.password)) {
      //errors.password = "Password must be at least 6 characters long.";
      errors.password = "Password must be at least 6 characters long, include at least one letter, one number, and one special character.";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    })); // Clear individual field error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await API.post("/register", formData);
      setSuccess("Registration successful!");
      toast.success("User Successfully Registered!");
      setError("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError("There was an error during registration.");
      toast.error("Registration failed.");
      setSuccess("");
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="12" boxShadow="2xl" rounded="md" bg="white" className="box">
      <Toaster />
      <Card>
        <CardHeader>
          <Heading size="md">Sign Up</Heading>
          <Text mt="2" color="gray.500">
            Fill in the form below to create an account
          </Text>
        </CardHeader>
        <CardBody>
          <Stack spacing={4}>
            <Box>
              <Text mb="1" fontWeight="medium">
                Name:
              </Text>
              <Input
                placeholder="Name"
                focusBorderColor="blue.500"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {validationErrors.name && <Text color="red.500">{validationErrors.name}</Text>}
            </Box>
            <Box>
              <Text mb="1" fontWeight="medium">
                Email:
              </Text>
              <Input
                placeholder="Email"
                focusBorderColor="blue.500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {validationErrors.email && <Text color="red.500">{validationErrors.email}</Text>}
            </Box>
            <Box>
              <Text mb="1" fontWeight="medium">
                Password:
              </Text>
              <Input
                placeholder="Password"
                focusBorderColor="blue.500"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {validationErrors.password && <Text color="red.500">{validationErrors.password}</Text>}
            </Box>
            {error && <Text color="red.500">{error}</Text>}
            {success && <Text color="green.500">{success}</Text>}
          </Stack>
          <Text mt="4" textAlign="center">
            Or{" "}
            <NavLink to="/login" style={{ color: "blue", textDecoration: "underline" }}>
              login
            </NavLink>
          </Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="flex-end">
          <Button variant="outline" colorScheme="gray" mr="2">
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit}>
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Register;
