import React from 'react';
import './App.css'; 
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import UpperBar from './components/upperbar'; 
import Dashboard from './components/dashboard';
import Main_Dashboard from './components/Main_Dashboard';
import Products from './components/Products';
import Catcat from './components/Catcat';
import Cat_General from './components/Cat_General';
import General_Product_Edit from './components/General_Product_Edit';
import Product_Discount from './components/Product_Discount';

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
      path:"/General_Product_Edit",
      element:<>
      <General_Product_Edit/></>
    },
    {
      path:"/Product_Discount",
      element:<>
      <Product_Discount/></>
    },

  ])
  return (
    <>
      
      <RouterProvider router = {router} />

    </>
  );
}

export default App;
