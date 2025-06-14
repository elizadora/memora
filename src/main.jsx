import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DialogProvider } from './context/DialogContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// creat a query client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <QueryClientProvider client={queryClient}>
       <DialogProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </DialogProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
