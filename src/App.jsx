import React from 'react';
import './App.css'; 
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import UpperBar from './components/upperbar'; 
import Dashboard from './components/dashboard';
import Main_Dashboard from './components/Main_Dashboard';
import Products from './components/Products';
import Product_General from './components/Product_General';
import Catcat from './components/Catcat';
import Cat_General from './components/Cat_General';


function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <>
        <UpperBar />
        <Dashboard />
      </> 
    },
    {
      path : "/Main_Dashboard",
      element : <>
      <Main_Dashboard /></>
    },
    {
      path : "/Categories",
      element : <>
      <Catcat />
      </>
    },
    {
      path:"/Cat_General",
      element:<>
      <Cat_General/>
      </>
    },
    {
      path : "/Attributes",
      element :<> <UpperBar />
      <Dashboard />
      </>
    },
    {
      path : "/Products",
      element :<> <Products/>
      </>
    },
    {
      path:"/Product_General",
      element:<>
      <Product_General/></>
    },

  ])
  return (
    <>
      
      <RouterProvider router = {router} />

    </>
  );
}

export default App;
