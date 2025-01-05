import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { baseTheme } from '@chakra-ui/theme'
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={baseTheme}>
    <App />
  </ChakraProvider>
);
