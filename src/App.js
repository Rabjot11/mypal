
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Footer } from './components/Footer';
import Nav from './components/Nav';
import { HashRouter, Routes, Route} from 'react-router-dom';
import { Adopt, Contact, Home, Order, Shop } from './components/Main';
import './components/Nav.css';


function App() {
 
  return (
    <div> 
      

      <HashRouter>
      {/* <Header /> */}
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order" element={<Order />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />
      </HashRouter>

      
    </div>
  );
}

export default App;
