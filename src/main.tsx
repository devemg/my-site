import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ProjectPage } from './Project.tsx';
import './i18n/config';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pro/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
