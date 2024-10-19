import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./output.css";
import HomepageComponent from "./pages/homepage/index.tsx";
import { RegisterPage } from "./pages/register/index.tsx";
import AuthService from "./services/auth/authService.ts";
import { AppProvider } from "./context/AppContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageComponent />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
