import React from 'react';
import './App.css'; 
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import UpperBar from './components/upperbar'; 
import Dashboard from './components/dashboard';
import Main_Dashboard from './components/Main_Dashboard';
import Sample from './components/Sample';

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><UpperBar />
      <Dashboard /><Sample /></> 
    },
    {
      path : "/Main_Dashboard",
      element : <>
      <Main_Dashboard /></>
    },
    {
      path : "/Category",
      element : <>      <UpperBar />
      <Dashboard /><Sample /></>
    },
    {
      path : "/Attributes",
      element :<> <UpperBar />
      <Dashboard />
      <Sample />
      </>
    }
  ])
  return (
    <>

      <RouterProvider router = {router} />

    </>
  );
}

export default App;
