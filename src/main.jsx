import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider,extendTheme } from "@chakra-ui/react";


//extend theme
const color = {
  brand:{

  }
}

const fonts = {
  bode:"",
  heading:""
}



const theme = extendTheme()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
