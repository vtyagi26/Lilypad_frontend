import React from 'react'
import UpperBar from './upperbar'
import Dashboard from './dashboard'
import "./Main_Dashboard.css"
const Main_Dashboard = () => {
  return(
    <div>
      <UpperBar/>
      <div className='Main_Dashboard'>
        <div>
        <Dashboard/>
        </div>
        <div className='Main_Dashboard_Content'>
          <h2>Dashboard</h2>
          <hr className='Line'></hr>
          <div className='Cards'>
          <div className='Card'>
              <h3 className='Total_Orders'>Total Orders</h3>
              <div className='Card_Content'>
              <img className="shopping_cart"src="./src/assets/shopping-cart.png"></img>
              <h3 className="value">1.5k</h3>
              </div>
              <p className='View_More'>veiw more...</p>
              
          </div>
          <div className='Card'>
              <h3 className='Total_Sales'>Total Sales</h3>
              <div className='Card_Content'>
              <img className="sales"src="./src/assets/sales.png"></img>
              <h3 className="value">1M</h3>
              </div>
              
              <p className="View_More">veiw more...</p>
          </div>
          <div className='Card'>
              <h3 className='Total_Customers'>Total Customers</h3>
              <div className='Card_Content'>
              <img className="customers"src="./src/assets/customer.png"></img>
              <h3 className="value">14.6k</h3>
              </div>
              
              <p className="View_More">veiw more...</p>
          </div>
          <div className='Card'>
              <h3 className='People_Online'>People Online</h3>
              <div className='Card_Content'>
              <img className="people"src="./src/assets/customer.png"></img>
              <h3 className="value">100</h3>
              </div>
              
              <p className="View_More">veiw more...</p>
          </div>
          </div>
          <br></br>
          <div className='sales-analytics'>
            <div className='sales_analytics_header'>
            <img className="sales_analytics_icon" src="./src/assets/sales_icon.png"></img>
            <h3 className='sales-analytics-heading'>Sales Analytics</h3>
            </div>
            <br></br>
            <img className="sales_graph" src="./src/assets/sales_analytics.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Dashboard