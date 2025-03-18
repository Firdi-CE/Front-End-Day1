import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
// import Home from "./home/home.tsx";
import Layout from "./layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <title>Nathanael Zorens Page</title>
    <Layout />
  </StrictMode>
);
