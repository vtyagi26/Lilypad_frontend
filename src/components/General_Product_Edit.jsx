import React from 'react';
import Edit_Product from './Edit_Product';
import "./General_Product_Edit.css";
import UpperBar from './upperbar';
import Dashboard from './dashboard';

const General_Product_Edit = () => {
    return (
        <div>
            <UpperBar />
            <div className='General_Product_Edit'>
                <div>
                    <Dashboard />
                </div>
                <div className='General_Product_Edit_Main'>
                    <Edit_Product />
                    <h3>General</h3>
                    <div className='Edit_Product_Name'>
                        <h4>Product Name: </h4>
                        <input className='Input_Edit_Name' type="text" placeholder="Product Name" />
                    </div>
                    <hr/>
                    <div className='Edit_Product_Description'>
                        <h4>Description: </h4>
                        <textarea className='Input_Edit_Description' placeholder="Product Description" />
                    </div>
                    <hr />
                    <div className='Edit_Mega_Tag_Title'>
                        <h4>Mega Tag Title: </h4>
                        <input className='Input_Mega_Tag_Title' type="text" placeholder="Mega Tag Title" />
                    </div>
                    <hr/>
                    <div className='Mega_Tag_Description'>
                        <h4>Mega Tag Description: </h4>
                        <textarea className='Input_Mega_Tag_Description' placeholder="Mega Tag Description" />
                    </div>
                    <hr />
                    <div className='Mega_Tag_Keywords'>
                        <h4>Mega Tag Keywords: </h4>
                        <textarea className='Input_Mega_Tag_Keywords' placeholder="Mega Tag Keywords" />
                    </div>
                    <hr />
                    <div className='Product_Tags'>
                        <h4>Product Tags: </h4>
                        <input className='Input_Product_Tags' type="text" placeholder="Product Tags (Comma seperated)" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default General_Product_Edit;