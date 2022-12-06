import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import router from "./routes"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
