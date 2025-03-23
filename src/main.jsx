import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login/Login.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'

// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App/>}>
//       <Route path="login" element={<Login/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={routes}/> */}
    <App/>
  </StrictMode>,
)
