import React, { useState } from 'react';
import "./Products.css";
import UpperBar from './upperbar';
import Dashboard from './dashboard';

const Products = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleCheckboxChange = (productId) => {
        setSelectedProducts(prevSelected => 
            prevSelected.includes(productId) 
            ? prevSelected.filter(id => id !== productId) 
            : [...prevSelected, productId]
        );
    };

    return (
        <div>
            <UpperBar />
            <div className='Products'>
                <div>
                    <Dashboard />
                </div>
                <div>
                    <div className='Product_Nav'>
                        <h2>Products</h2>
                        <div>
                            <br />
                            <img className='add_copy_delete' src="./src/assets/add.png" alt="Add" />
                            <img className='add_copy_delete' src="./src/assets/copy.png" alt="Copy" />
                            <img className='add_copy_delete' src="./src/assets/delete.png" alt="Delete" />
                        </div>
                    </div>
                    <hr className='Line' />
                    <h3 className='ProductListHeading'>☰ Product List</h3>
                    <div className='Product_Content'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: 1, name: 'EV 1', model: 'Product 1', price: '$100.00', quantity: 200 },
                                    { id: 2, name: 'EV 2', model: 'Product 2', price: '$90.00', quantity: 250 },
                                    { id: 3, name: 'EV 3', model: 'Product 3', price: '$200.00', quantity: 100 },
                                    { id: 4, name: 'EV 4', model: 'Product 4', price: '$300.00', quantity: 50 },
                                    { id: 5, name: 'EV 5', model: 'Product 5', price: '$250.00', quantity: 150 },
                                    { id: 6, name: 'EV 6', model: 'Product 6', price: '$350.00', quantity: 10 },
                                    { id: 7, name: 'EV 7', model: 'Product 7', price: '$220.00', quantity: 180 },
                                ].map(product => (
                                    <tr key={product.id}>
                                        <td>
                                            <input 
                                                type="checkbox" 
                                                checked={selectedProducts.includes(product.id)} 
                                                onChange={() => handleCheckboxChange(product.id)} 
                                            />
                                        </td>
                                        <td align="center"><img className="image" src="./src/assets/ev.png" alt={product.name} /></td>
                                        <td>{product.name}</td>
                                        <td>{product.model}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td><img className='edit_icon' src="./src/assets/edit.png" alt="Edit" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                        <div className='Filter_Div'>
                            <div className='Filter_Heading'>
                                <h3>Filter</h3>
                                <hr />
                            </div>
                            <h4>Product Name</h4>
                            <input className="Input" placeholder='Product Name' />
                            <h4>Model</h4>
                            <input className="Input" placeholder='Model' />
                            <h4>Price</h4>
                            <input className="Input" placeholder='Price' />
                            <h4>Quantity</h4>
                            <input className="Input" placeholder='Quantity' />
                            <h4>Status</h4>
                            <input className="Input" placeholder='Status' />
                            <br />
                            <br />
                            <button className='Filter_Button'>Filter</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
