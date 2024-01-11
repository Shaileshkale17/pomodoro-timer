import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Timer from './components/Timer/Timer.jsx'
import Login from './components/Login/Login..jsx'
import Protected from './components/Protected/Protected.jsx'
import PomodoroTime from './components/Timer/PomodoroTime.jsx';
import Signup from './components/Login/Signup.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/'element={<App/>}>
//       <Route path='login' element={<Login/>}/>
//       <Route path="/protected" element={<Protected />} >
//       <Route index element={<Timer/>} />
//       </Route>
//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path="/protected" element={<Protected />}>
        <Route index element={<PomodoroTime/>} />
      </Route>
    </Route>
  ])
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);


