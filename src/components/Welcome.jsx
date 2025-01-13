import React from 'react'
import UpperBar from './upperbar'
import Dashboard from './dashboard'
import "./Welcome.css"
const Main_Dashboard = () => {
  return(
    <div>
      <UpperBar/>
      <div className='Main_Dashboard'>
        <div>
        <Dashboard/>
        </div>
        <div className='Welcome_page_content'>
            <div className='heading'></div>
          <h1 className='heading'>WELCOME TO LILYPAD</h1>
        <hr className='Line1'></hr>
        </div>
      </div>
    </div>
  );
}

export default Main_Dashboard
