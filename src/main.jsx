import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import ProjectPage from './pages/projects.jsx'
import SkillsPage from './pages/skills.jsx';
import ComingSoonPage from './pages/comingsoon.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
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
    element:<ComingSoonPage/>,
  },
  {
    path:"/certificate",
    element:<ComingSoonPage/>,
  },
  {
    path:"/about",
    element:<ComingSoonPage/>,
  },
  {
    path:"/contact",
    element:<ComingSoonPage/>,
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

