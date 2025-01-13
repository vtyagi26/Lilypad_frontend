import "./Product_General.css";
import UpperBar from './upperbar';
import Dashboard from './dashboard';
const Product_General = () => {
 return(
    <div>
        <UpperBar/>
        <div className="Product_General">
            <div>
                <Dashboard/>
            </div>
            <div>
            <div className="nav_product_edit">
                <h2>Products</h2>
                <div>
                    <br />
                    <img className='save_back' src="./src/assets/save.png" alt="Add" />
                    <img className='save_back' src="./src/assets/back.png" alt="Copy" />
                </div>
            </div>
            
            <hr></hr>
            </div>

        </div>
    </div>
 );
}
export default Product_General 