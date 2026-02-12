import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Love from './Love.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'



const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>

    },
    {
      path:'/view',
      element:<Love/>
    }
    
  ]
)

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)