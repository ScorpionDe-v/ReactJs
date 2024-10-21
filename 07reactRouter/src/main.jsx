import React from 'react';
import ReactDOM from 'react-dom/client';  // Ensure you're importing from 'react-dom/client'
import App from './App';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx"; 
import User from './components/User/User.jsx';
import Contact from './components/contact/contact.jsx';
import Github from './components/Github/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element :<Layout/>,
//     children :[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<contact/>
//       },
//       {
//         path:"user/:id",
//         element:<User/>
//       }

//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={ <Contact /> } />
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
