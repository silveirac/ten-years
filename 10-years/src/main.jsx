// DEAULT
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// ROTAS
import App from './App.jsx'
import { HomePage } from './routes/HomePage'
import { DayOne } from './routes/DayOne'


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DayTwo } from './routes/DayTwo'
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
    children:[
      { index: true, element: <HomePage/>},
      { path: "/one", element: <DayOne/>},
      { path: "/two", element: <DayTwo/>},
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)
