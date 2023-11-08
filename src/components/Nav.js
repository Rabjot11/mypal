import { Link } from "react-router-dom";
import logo from './images/logo.jpg';
import cart_icon from './images/cart_icon.png';
import { useState } from "react";

function Nav()
    {
        const [menu,setMenu] = useState("home");
        return(
        
            <div class="navbar bg-light ">
                <div class="nav-log">
                <img src={logo} alt="" width={55}/>
                
                </div>
                <ul class="nav-menu">
                        <li onClick={()=>{setMenu("home")}}><Link class="nav-link" to="/">Home</Link>{menu=="home"}</li>
                        <li onClick={()=>{setMenu("product")}}><Link class="nav-link " to="/product">Product</Link>{menu=="product"}</li>
                        
                        <li onClick={()=>{setMenu("adopt")}}><Link class="nav-link " to="/adopt">Adopt</Link>{menu=="adopt"}</li>
                        <li onClick={()=>{setMenu("contact")}}><Link class="nav-link " to="/contact">Contact</Link>{menu=="contact"}</li>

                </ul>
                <div class="nav-login-cart">
                    <ul></ul>
                    <li onClick={()=>{setMenu("login")}}><Link class="nav-link " to="/login"><button>Login</button></Link>{menu=="login"}</li>
                    <img src={cart_icon} alt="" />
                    <div class="nav-cart-count">0</div>
                    </div>                 
            </div>           
    )
    }
export default Nav;
