import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./pages/App"
import Services from './pages/Services'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/services",
        element: <Services/>,
    }, 
    {
        path: "/blog",
        element: <Blog/>,
    },
    {
        path: "/about-us",
        element: <AboutUs/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router}  />        
    </React.StrictMode>
)