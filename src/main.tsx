import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './style/index.css'
import {router} from "@/router.ts";
import {RouterProvider} from "@tanstack/react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
