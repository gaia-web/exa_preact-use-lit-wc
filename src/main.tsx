import { render } from "preact";
import { App } from "./app.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("app")!
);
