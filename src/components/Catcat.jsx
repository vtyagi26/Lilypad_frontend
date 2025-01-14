import React, { useState } from 'react';
import "./Catcat.css";
import UpperBar from './upperbar';
import Dashboard from './dashboard';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleCheckboxChange = (productId) => {
        setSelectedProducts(prevSelected =>
            prevSelected.includes(productId)
                ? prevSelected.filter(id => id !== productId)
                : [...prevSelected, productId]
        );
    };

    const handleDeleteClick = () => {
        const confirmation = window.confirm("Are you sure you want to delete the selected items?");
        if (confirmation) {
            alert("Items deleted successfully!");
            setSelectedProducts([]); // Reset the selected items
        } else {
            alert("Delete action canceled.");
        }
    };

    const handleUpdateClick = () => {
        alert("You don't have permission for this task.");
    };

    return (
        <div>
            <UpperBar />
            <div className='Products'>
                <div>
                    <Dashboard />
                </div>
                <div>
                    <div className='Cat_Nav'>
                        <h2>Categories</h2>
                        <div className="buttons-container">
                            <button
                                className="btn update-btn"
                                title="Update"
                                onClick={handleUpdateClick} // Fires on click
                            >
                                Update
                            </button>
                            <button className="btn add-btn" title="Add">
                                Add
                            </button>
                            <button
                                className="btn delete-btn"
                                title="Delete"
                                onClick={handleDeleteClick} // Fires on click
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <hr className='Line' />
                    <h3 className='ProductListHeading'>☰ Category List</h3>
                    <div className='Product_Content'>
                        <table className='table1'>
                            <thead>
                                <tr>
                                    <th className="right-align">Select</th>
                                    <th>Category Name</th>
                                    <th className="right-align">Sort Order</th>
                                    <th className="right-align">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { id: 1, name: 'Category One' },
                                    { id: 2, name: 'Category Two' },
                                    { id: 3, name: 'Category Three' },
                                    { id: 4, name: 'Category Four' },
                                    { id: 5, name: 'Category Five' },
                                    { id: 6, name: 'Category Six' },
                                    { id: 7, name: 'Category Seven' },
                                ].map(category => (
                                    <tr key={category.id}>
                                        <td className="right-align">
                                            <input
                                                type="checkbox"
                                                checked={selectedProducts.includes(category.id)}
                                                onChange={() => handleCheckboxChange(category.id)}
                                            />
                                        </td>
                                        <td>{category.name}</td>
                                        <td className="right-align">{category.id}</td>
                                        <td>
                                            <NavLink to="/Cat_General">
                                                <img className='edit_icon' src="./src/assets/edit.png" alt="Edit" />
                                            </NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
