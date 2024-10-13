import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './output.css'
import HomepageComponent from './pages/homepage/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageComponent/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
