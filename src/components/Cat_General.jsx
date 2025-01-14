import React, { useState } from 'react';
import "./Catcat.css";
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
                    </div>
                    <hr className='Line' />
                    <h3 className='ProductListHeading'>Edit Category :</h3>
                    <div className='Product_Content'>

                            



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
