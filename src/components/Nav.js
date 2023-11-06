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
                        <li onClick={()=>{setMenu("home")}}><Link class="nav-link" to="/">Home</Link>{menu=="home"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("shop")}}><Link class="nav-link " to="/shop">Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("order")}}><Link class="nav-link " to="/order">Order</Link>{menu=="order"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("adopt")}}><Link class="nav-link " to="/adopt">Adopt</Link>{menu=="adopt"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("contact")}}><Link class="nav-link " to="/contact">Contact</Link>{menu=="contact"?<hr/>:<></>}</li>

                </ul>
                <div class="nav-login-cart">
                    <button>Login</button>
                    <img src={cart_icon} alt="" />
                    <div class="nav-cart-count">0</div>
                    </div>                 
            </div>           
    )
    }
export default Nav;
