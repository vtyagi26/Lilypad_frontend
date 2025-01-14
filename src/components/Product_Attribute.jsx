import React, { useState } from 'react';
import Dashboard from './dashboard';
import UpperBar from './upperbar';
import Edit_Product from './Edit_Product';
import "./Product_Attribute.css";

const Product_Discount = () => {
  const [rows, setRows] = useState([
    { attribute: '', description: '' },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { attribute: '', description: '' }]);
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
            <h3>Attribute</h3>
            <table className='Discount_Table'>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td align="center">
                      <input
                        type="text"
                        placeholder="Attribute"
                        value={row.attribute}
                        onChange={(e) => handleChange(index, 'attribute', e.target.value)}
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
                        type="text"
                        placeholder="Description"
                        value={row.description}
                        onChange={(e) => handleChange(index, 'description', e.target.value)}
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
