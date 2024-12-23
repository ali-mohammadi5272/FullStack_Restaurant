import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Container from "./components/Container/Container.tsx";
import "./assets/styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Container>
        <App />
      </Container>
    </BrowserRouter>
  </StrictMode>
);
