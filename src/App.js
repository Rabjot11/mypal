
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { Footer } from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div> 
      <Header />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
