import React from 'react';
import './App.css'; 
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import UpperBar from './components/upperbar'; 
import Dashboard from './components/dashboard';
import Categories from './components/categories';
import Main_Dashboard from './components/Main_Dashboard';
import Products from './components/Products';
import Product_General from './components/Product_General';
import Welcome from './components/Welcome';
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <>
        <Welcome />
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

      <Categories />
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
    }
  ])
  return (
    <>
      
      <RouterProvider router = {router} />

    </>
  );
}

export default App;
