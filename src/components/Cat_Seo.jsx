import React, { useState } from 'react';
import "./Cat_Seo.css";
import UpperBar from './upperbar';
import Dashboard from './dashboard';
import Edit_Cat from './Edit_Cat';

const General_Product_Edit = () => {
    const [keyword, setKeyword] = useState("Cameras");

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <div>
            <UpperBar />
            <div className='General_Product_Edit'>
                <div>
                    <Dashboard />
                </div>
                <div className='General_Product_Edit_Main'>
                    <Edit_Cat />
                  
                    <table className="product-edit-table">
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Store</th>
                                <th style={{ width: '70%' }}>Keyword</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Default</td>
                                <td>
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={handleKeywordChange}
                                        className="editable-input"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default General_Product_Edit;
