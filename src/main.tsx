import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router';
import App from './App.tsx'
import ContactPage from "@pages/Contact.tsx";
import './i18n/config';
import './index.css'
import ExperiencePage from "@pages/Experience.tsx";
import ProjectsPage from "@pages/Projects.tsx";
import HomePage from "@pages/Home.tsx";
import ProjectDetailsPage from "@pages/ProjectDetails.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'home', element: <HomePage/>},
            {path: 'contact', element: <ContactPage/>},
            {path: 'experience', element: <ExperiencePage/>},
            {path: 'projects', element: <ProjectsPage/>},
            {path: 'projects/:key', element: <ProjectDetailsPage/>},
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
