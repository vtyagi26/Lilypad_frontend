import "./Edit_Cat.css";
import { NavLink } from 'react-router-dom';
const Edit_Cat = () => {
 return(
        <div className="Product_Edit">
            <div>
            <div className="nav_product_edit">
                <h2>Categories</h2>
                <div>
                    <br />
                    <img className='save_back' src="./src/assets/save.png" alt="Add" />
                    <img className='save_back' src="./src/assets/back.png" alt="Copy" />
                </div>
            </div>
            
            <hr></hr>
            <div className="Edit_Product_Div">
                <h3><img className="Product_Edit_Icon" src="./src/assets/edit.png"/>Edit Categories</h3>
                <nav className="Edit_Nav">
                    <h4><NavLink to="/Edit_Cat" style={{color:"black"}}>General</NavLink></h4>
                    <h4><NavLink to="/Cat_Seo" style={{color:"black"}}>SEO</NavLink></h4>
                </nav>
            </div>
            </div>

        </div>
 );
}
export default Edit_Cat;