import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./output.css";
import HomepageComponent from "./pages/homepage/index.tsx";
import { RegisterPage } from "./pages/register/index.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import Layout from "./pages/Layout/index.tsx";
import ProductDetail from "./pages/product/index.tsx";
import { ProductListPage } from "./pages/productList/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomepageComponent />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <Layout />,
    children: [
      {
        path: ":productId",
        element: <ProductDetail />,
      },
      {
        path: "listproducts",
        element: <ProductListPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
