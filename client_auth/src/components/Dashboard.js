import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"; // Import the hook here
import API from "../api";

const Dashboard = () => {
  const navigate = useNavigate(); // Define navigate here to use it for redirection
  
  const logout = async () => {
    try {
      const response = await API.post('/logout', {}, { withCredentials: true });

      if (response.status === 200) {
        // Clear localStorage or sessionStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.success("User Logout Successfully")

        // Redirect to login page
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during logout:', error.message);
      toast.error('This is an error!');
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt="12" boxShadow="2xl" rounded="md" bg="white">
        <Toaster />
      <Card>
        <CardHeader>
          <Heading size="md" textAlign="center">
            Welcome to the Dashboard
          </Heading>
          <Text mt="2" color="gray.500" textAlign="center">
            This is a sample dashboard page.
          </Text>
        </CardHeader>
        <CardBody>
          <Stack spacing={4}>
            <Text textAlign="center" fontSize="lg">
              Here, you can manage your settings, view notifications, and more.
            </Text>
            <Text textAlign="center" color="gray.600">
              Sample dashboard content goes here. You can add more widgets or options as needed.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter display="flex" justifyContent="center" gap={4}>
          <Button colorScheme="blue" width="40%">
            Go to Settings
          </Button>
          <Button variant="outline" colorScheme="gray" width="40%" onClick={logout}>
            Log Out
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Dashboard;
