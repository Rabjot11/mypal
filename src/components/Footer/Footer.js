
import './Footer.css';
import logo from  '../images/logo.ico';
import instagram_icon from '../images/instagram_icon.png';
import pintester_icon from '../images/pintester_icon.png';
import wattsapp_icon from '../images/whatsapp_icon.png';

export function Footer (){
    return (
        <div class='footer '> 
            <div class="footer-logo" >
               <img width={75} src={logo} alt="" />
                <p> My Pal</p>
         </div>
         
        <ul className="footer-links">
        <li>Company</li>
         <li>Product</li>
         <li>Offices</li>
         <li>about</li>
         <li>Contact</li>
        </ul>
         <div className="footer-social-icon">
            <div className="footer-icon-conatainer">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-conatainer">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-conatainer">
                <img src={wattsapp_icon} alt="" />
            </div>
         </div>
         <div className="footer-copyright">
            <hr />
            <p>copyright @ 2023 - All Right Reserved. </p>
            
            </div>
          </div>
    )
}
