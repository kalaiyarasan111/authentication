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
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import API from '../api'; // Import the API instance

const Login = () => {
      const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
     
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');

      const navigate = useNavigate();
      
      const handleChange =(e)=>{
        setFormData({
            ...formData,
            //[e.target.value]:e.target.value
            [e.target.name]: e.target.value,
        })
      }

      const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await API.post("/login", formData)
            setSuccess("Login Successfully");
            toast.success('User Successfully Login!');
            setError("");
             // Store token in localStorage
            localStorage.setItem('authToken', response.data.token);

            setTimeout(() => {
                navigate('/dashboard')
            }, 2000);
        } catch (error) {
            setError('There was an error during login.');
            toast.error('This is an error!');
            setSuccess('');
        }
      }

  return (
   <Box maxW="sm" mx="auto" mt="12" boxShadow="2xl" rounded="md" bg="white">
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
                 <Text mb="1" fontWeight="medium">Email: </Text>
                 <Input
                   placeholder="Email"
                   focusBorderColor="blue.500"
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                 />
               </Box>
               <Box>
                 <Text mb="1" fontWeight="medium">Password: </Text>
                 <Input
                   placeholder="Password"
                   focusBorderColor="blue.500"
                   type="password"
                   name="password"
                   value={formData.password}
                   onChange={handleChange}
                 />
               </Box>
               {error && <Text color="red.500">{error}</Text>}
               {success && <Text color="green.500">{success}</Text>}
             </Stack>
             
           {/* <NavLink  to="/register">Create a new account</NavLink> */}
           <Text mt="4" textAlign="center">
            Or{" "}
            <NavLink to="/register" style={{ color: "blue", textDecoration: "underline" }}>
              Create a new account
            </NavLink>
          </Text>
           </CardBody>
           <CardFooter display="flex" justifyContent="flex-end">
             <Button variant="outline" colorScheme="gray" mr="2">
               Cancel
             </Button>
             <Button colorScheme="blue" onClick={handleSubmit}>
               Login
             </Button>
            
           </CardFooter>
         </Card>
       </Box>
     );
   };
   
   
  

export default Login