import React, { useState } from 'react';
import Dashboard from './dashboard';
import UpperBar from './upperbar';
import Edit_Product from './Edit_Product';
import "./Product_Discount.css"
const Product_Discount = () => {
  const [rows, setRows] = useState([
    { quantity: 10, priority: 1, price: 88.0, startDate: '', endDate: '' },
    { quantity: 20, priority: 1, price: 77.0, startDate: '', endDate: '' },
    { quantity: 30, priority: 1, price: 66.0, startDate: '', endDate: '' },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      { quantity: 0, priority: 1, price: 0.0, startDate: '', endDate: '' },
    ]);
  };

  const handleDeleteRow = (index) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
  };

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  return (
    <div>
      <UpperBar />
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <Dashboard />
        </div>
        <div>
          <Edit_Product />
          <br />
          <div style={{border:"1px solid #ccc" , padding:"15px"}}>
            <h3>Discount</h3>
          <table className='Discount_Table'>
            <thead>
              <tr>
                <th>Customer Group</th>
                <th>Quantity</th>
                <th>Priority</th>
                <th>Price</th>
                <th>Date Start</th>
                <th>Date End</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td align="center" >
                    <select style={{backgroundColor:"white", color:"black",height:"25px",borderRadius:"5px"}}>
                      <option>Default</option>
                    </select>
                  </td>
                  <td align='center'>
                    <input
                      type="number"
                      value={row.quantity}
                      onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                      style={{backgroundColor:"white", color:"black",height:"25px",borderRadius:"5px"}}
                    />
                  </td>
                  <td align='center'>
                    <input
                      type="number"
                      value={row.priority}
                      onChange={(e) => handleChange(index, 'priority', e.target.value)}
                      style={{backgroundColor:"white", color:"black",height:"25px",borderRadius:"5px"}}
                    />
                  </td>
                  <td align='center'>
                    <input
                      type="number"
                      value={row.price}
                      onChange={(e) => handleChange(index, 'price', e.target.value)}
                      style={{backgroundColor:"white", color:"black",height:"25px",borderRadius:"5px"}}
                    />
                  </td>
                  <td align='center'>
                    <input
                      type="date"
                      value={row.startDate}
                      onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                      style={{backgroundColor:"white", color:"black",height:"25px",borderRadius:"5px"}}
                    />
                  </td>
                  <td align='center'>
                    <input
                      type="date"
                      value={row.endDate}
                      onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                      style={{backgroundColor:"white", color:"black", height:"25px",borderRadius:"5px"}}
                    />
                  </td>
                  <td align='center'>
                    <button 
                      style={{ backgroundColor: 'red', color: 'white', padding: '5px' ,width:"30px",borderRadius:"5px"}}
                      onClick={() => handleDeleteRow(index)}
                    >
                      -
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            style={{ backgroundColor: 'blue', color: 'white', padding: '5px', marginTop: '10px' }}
            onClick={handleAddRow}
          >
            +
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Discount;
