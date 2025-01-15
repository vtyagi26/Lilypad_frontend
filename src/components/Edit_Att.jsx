import "./Edit_Att.css";
const Edit_Cat = () => {
 return(
        <div className="Product_Edit">
            <div>
            <div className="nav_product_edit">
                <h2>Attributes</h2>
                <div>
                    <br />
                    <img className='save_back' src="./src/assets/save.png" alt="Add" />
                    <img className='save_back' src="./src/assets/back.png" alt="Copy" />
                </div>
            </div>
            
            <hr></hr>
            <div className="Edit_Product_Div">
                <h3><img className="Product_Edit_Icon" src="./src/assets/edit.png"/>Edit Attributes</h3>
                <nav className="Edit_Nav">
                </nav>
            </div>
            </div>

        </div>
 );
}
export default Edit_Cat;