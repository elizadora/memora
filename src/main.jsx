import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DialogProvider } from './context/DialogContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DialogProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </DialogProvider>
    </AuthProvider>
  </StrictMode>,
)
