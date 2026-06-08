import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CategoryProvider from './contexts/CategoryProvider.jsx'
import AuthorProvider from './contexts/AuthorProvider.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <AuthorProvider>
          <App />
        </AuthorProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>
);