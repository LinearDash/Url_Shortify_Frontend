import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import './index.css'
import router from './route.tsx';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
    <RouterProvider router={router} /> 
    </QueryClientProvider>
  </StrictMode>,
)
