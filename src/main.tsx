import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import './index.css'
import router from './route.tsx';
import { QueryClientProvider} from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast'
import { queryClient } from './lib/queryClient.ts';
import { AuthProvider } from './contexts/AuthContext.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster position="top-center" />
        <RouterProvider router={router} /> 
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
