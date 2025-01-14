import React from 'react';
import "./Cat_General.css";
import UpperBar from './upperbar';
import Dashboard from './dashboard';
import Edit_Cat from './Edit_Cat';

const General_Product_Edit = () => {
    return (
        <div>
            <UpperBar />
            <div className='General_Product_Edit'>
                <div>
                    <Dashboard />
                </div>
                <div className='General_Product_Edit_Main'>
                    <Edit_Cat />
                    <h3>General</h3>
                    <div className='Edit_Product_Name'>
                        <h4>Category Name </h4>
                        <input className='Input_Edit_Name' type="text" placeholder="Product Name" />
                    </div>
                    <hr/>
                    <div className='Edit_Product_Description'>
                        <h4>Description: </h4>
                        <textarea className='Input_Edit_Description' placeholder="Product Description" />
                    </div>
                    <hr />
                    <div className='Edit_Mega_Tag_Title'>
                        <h4>Meta Tag Title: </h4>
                        <input className='Input_Mega_Tag_Title' type="text" placeholder="Mega Tag Title" />
                    </div>
                    <hr/>
                    <div className='Mega_Tag_Description'>
                        <h4>Meta Tag Description: </h4>
                        <textarea className='Input_Mega_Tag_Description' placeholder="Mega Tag Description" />
                    </div>
                    <hr />
                    <div className='Mega_Tag_Keywords'>
                        <h4>Meta Tag Keywords: </h4>
                        <textarea className='Input_Mega_Tag_Keywords' placeholder="Mega Tag Keywords" />
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};
export default General_Product_Edit;