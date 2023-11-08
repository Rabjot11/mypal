import { Link } from "react-router-dom";
import logo from './images/logo.jpg';
import cart_icon from './images/cart_icon.png';
import { useState } from "react";

function Nav()
    {
        const [menu,setMenu] = useState("home");
        return(
        
            <div className="navbar bg-light ">
                <div cclassName="nav-log">
                <img src={logo} alt="" width={55}/>
                
                </div>
                <ul className="nav-menu">
                        <li onClick={()=>{setMenu("home")}}><Link className="nav-link" to="/">Home</Link>{menu=="home"}</li>
                        <li onClick={()=>{setMenu("product")}}><Link className="nav-link " to="/product">Product</Link>{menu=="product"}</li>
                        
                        <li onClick={()=>{setMenu("adopt")}}><Link className="nav-link " to="/adopt">Adopt</Link>{menu=="adopt"}</li>
                        <li onClick={()=>{setMenu("contact")}}><Link className="nav-link " to="/contact">Contact</Link>{menu=="contact"}</li>

                </ul>
                <div className="nav-login-cart">
                    <ul></ul>
                    <li onClick={()=>{setMenu("login")}}><Link className="nav-link " to="/login"><button>Login</button></Link>{menu=="login"}</li>
                    <img src={cart_icon} alt="" />
                    <div className="nav-cart-count">0</div>
                    </div>                 
            </div>           
    )
    }
export default Nav;
