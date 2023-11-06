
import logo from '../components/images/logo.ico';
import social from '../components/images/social.png';
import "../../src/App.css"
export function Footer()

{
    return(
        <div class="row bg-dark p-1 ">
            <div class=" col-sm-12 col-md-6 col-lg-3">
                <h1 id="h1">Customer Service</h1>
                <ul>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Track Order</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Returns</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Shipping Info</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Pet Store Locator</a></li>
                </ul>
            </div>
            <div class=" col-sm-12 col-md-6 col-lg-3">
                <h1 id="h1">  Servies</h1>
                <ul>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Grooming</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Positive Dog Training</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Veterinary Services</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Petco Insurance</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Pet Adoption</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none">Resource Center</a></li>
                </ul>
            </div>
            <div class=" col-sm-12 col-md-6 col-lg-3">
            <h1 id="h1">Visit us on</h1>
                <ul>
                    <li class="p-1"><a class="text-secondary text-decoration-none" href="https://facebook.com">Facebook</a></li>
                    <li class="p-1"><a class="text-secondary text-decoration-none" href="https://whatsapp.com">Whatsapp</a></li>
                    <li class="p-1"><a  class="text-secondary text-decoration-none" href="https://instragram.com">Instagram</a></li>
                </ul>
            </div>
            <div class=" col-sm-12 col-md-6 col-lg-3">
                <ul>
                    <li><a href=" https://mypal.com">
                <img width="150" height="123" class="circular--square" src={logo} alt="image" />
                </a></li>
                <li><a href=" ff">
                <img width="150" src={social} alt="image" /></a></li>
                </ul>
                
              
                
                
            
            </div>
        </div>
        
    )
}