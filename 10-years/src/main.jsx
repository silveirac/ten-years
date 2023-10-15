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
import { DayFive } from './routes/DayFive'
import { DaySix } from './routes/DaySix'
import { DaySeven } from './routes/DaySeven'
import { DayEight } from './routes/DayEight'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
    children:[
      { index: true, element: <HomePage/> },
      { path: "/one", element: <DayOne/> },
      { path: "/two", element: <DayTwo/> },
      { path: "/three", element: <DayThree/> },
      { path: "/four", element: <DayFour/> },
      { path: "/five", element: <DayFive/> },
      { path: "/six", element: <DaySix/> },
      { path: "/seven", element: <DaySeven/> },
      { path: "/eight", element: <DayEight/> },
      { path: "*", element: <Navigate to={"/"}/> }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)