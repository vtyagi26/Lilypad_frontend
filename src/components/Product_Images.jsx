import React, { useState } from 'react';
import Dashboard from './dashboard';
import UpperBar from './upperbar';
import Edit_Product from './Edit_Product';
import "./Product_Images.css";

const Product_Discount = () => {
  const [rows, setRows] = useState([
    { imageSrc: '', sortOrder: 0 },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { imageSrc: '', sortOrder: 0 }]);
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
          <div style={{ border: "1px solid #ccc", padding: "15px" }}>
            <h3>Product Attributes</h3>
            <table className='Discount_Table'>
              <thead>
                <tr>
                  <th>Image Source</th>
                  <th>Sort Order</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td align="center">
                      <input
                        type="text"
                        placeholder="Image Source"
                        value={row.imageSrc}
                        onChange={(e) => handleChange(index, 'imageSrc', e.target.value)}
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          height: "25px",
                          borderRadius: "5px",
                          width: "100%",
                        }}
                      />
                    </td>
                    <td align='center'>
                      <input
                        type="number"
                        placeholder="0"
                        value={row.sortOrder}
                        onChange={(e) => handleChange(index, 'sortOrder', e.target.value)}
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          height: "25px",
                          borderRadius: "5px",
                          width: "100%",
                        }}
                      />
                    </td>
                    <td align='center'>
                      <button
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          padding: '5px',
                          width: "30px",
                          borderRadius: "5px",
                        }}
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
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '5px',
                marginTop: '10px',
                borderRadius: "5px",
              }}
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
