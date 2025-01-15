import React from 'react';
import "./Edit_Attribute.css";
import UpperBar from './upperbar';
import Dashboard from './dashboard';
import Edit_Att from './Edit_Att';

const General_Product_Edit = () => {
    return (
        <div>
            <UpperBar />
            <div className='General_Product_Edit'>
                <div>
                    <Dashboard />
                </div>
                <div className='General_Product_Edit_Main'>
                    <Edit_Att />
                    <div className='Edit_Product_Name'>
                        <h4>Attribute Name </h4>
                        <input className='Input_Edit_Name' type="text" placeholder="Attribute Name" />
                    </div>
                    <hr/>
                    <div className='Edit_Product_Description'>
                        <h4>Attribute Group </h4>
                        <textarea className='Input_Edit_Description' placeholder="Attribute Group" />
                    </div>
                    <hr />
                    <div className='Edit_Mega_Tag_Title'>
                        <h4>Sort Order </h4>
                        <input className='Input_Mega_Tag_Title' type="text" placeholder="Sort Order" />
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};
export default General_Product_Edit;