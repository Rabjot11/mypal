
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route} from 'react-router-dom';
import {Login} from './components/Auth/Login';
import { Signup } from './components/Auth/Signup';
import {ForgotPassword} from './components/Auth/ForgotPassword';
import './components/Nav.css';
import './components/Auth/AuthPage.css';
import Home from './components/pages/Home';
import Adopt from './components/pages/adopt/Adopt';
import Product from './components/pages/products/Product';
import Contact from './components/pages/contact/Contact';
import './components/pages/contact/Contact.css';


function App() {
 
  return (
    <div> 
      

      <HashRouter>
      
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

        </Routes>
        
        
        
      </HashRouter>

      
    </div>
  );
}

export default App;
