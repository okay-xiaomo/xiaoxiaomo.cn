import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import router from "./router/index.tsx";
import { RouterProvider } from "react-router-dom";

import DisableDevtool from 'disable-devtool'

if(import.meta.env.PROD){
  DisableDevtool()
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
