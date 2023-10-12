// DEAULT
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// ROTAS
import App from './App.jsx'
import { HomePage } from './routes/HomePage'
import { DayOne } from './routes/DayOne'


import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { DayTwo } from './routes/DayTwo'
import { DayThree } from './routes/DayThree'
import { DayFour } from './routes/DayFour'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
    children:[
      { index: true, element: <HomePage/>},
      { path: "/one", element: <DayOne/>},
      { path: "/two", element: <DayTwo/>},
      { path: "/three", element: <DayThree/>},
      // { path: "/four", element: <DayFour/>},
      { path: "*", element: <Navigate to={"/"}/>}
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)