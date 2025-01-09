import React from 'react';
import './App.css'; 
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import UpperBar from './components/upperbar'; 
import Dashboard from './components/dashboard';
import Categories from './components/categories';
import Main_Dashboard from './components/Main_Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><UpperBar />
      <Dashboard /></> 
    },
    {
      path : "/Main_Dashboard",
      element : <>
      <Main_Dashboard /></>
    },
    {
      path : "/Categories",
      element : <>

      <Categories />
      </>
    },
    {
      path : "/Attributes",
      element :<> <UpperBar />
      <Dashboard />
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
