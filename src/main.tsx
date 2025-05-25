import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GlobalPortal } from './shared/ui/GlobalPortal.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalPortal.Provider>
      <App />
    </GlobalPortal.Provider>
  </StrictMode>,
);
