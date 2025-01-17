import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import ProjectPage from './pages/projects.jsx'
import SkillsPage from './pages/skills.jsx';
import ComingSoonPage from './pages/comingsoon.jsx';
import ActicityPage from './pages/activity.jsx';
import AboutPage from './pages/about.jsx';
import CertificatePage from './pages/certificate.jsx';
import ContactPage from './pages/contact.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
    errorElement:<ComingSoonPage/>
  },
  {
    path:"/projects",
    element:<ProjectPage/>,
  },
  {
    path:"/skills",
    element:<SkillsPage/>,
  },
  {
    path:"/activity",
    element:<ActicityPage/>,
  },
  {
    path:"/certificate",
    element:<CertificatePage/>,
  },
  {
    path:"/about",
    element:<AboutPage/>,
  },
  {
    path:"/contact",
    element:<ContactPage/>,
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

