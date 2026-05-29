import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router';
import App from './App.tsx'
import ContactPage from "@pages/Contact.tsx";
import './i18n/config';
import './index.css'
import ExperiencePage from "@pages/Experience.tsx";
import ProjectsPage from "@pages/Projects.tsx";
import HomePage from "@pages/Home.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/experience" element={<ExperiencePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
