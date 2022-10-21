import logo from './logo.svg';
import './App.css';
import Home from './Compoments/Home/Home';
import Header from './Compoments/Home/Header/Header';
import NavbarSection from './Compoments/Home/Navbar/NavbarSection';
import Collection from './Compoments/Home/Collection/Collection';
import Shop from './Compoments/Shop/Shop';
import Product from './Compoments/Product/Product';
import Mycarts from './Compoments/Cart/Mycarts/Mycarts';
import Counpones from './Compoments/Cart/Coupones/Counpones';
import Gallery from './Compoments/Gallery/Gallery';
import { Routes, Route, Link } from "react-router-dom";
import Cart from './Compoments/Cart/Cart';
import Pratcies from "./Compoments/Home/pratcies/pratcies"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Product/:id" element={<Product />} />
        <Route path="Galler" element={<Gallery />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Shop" element={<Shop />} />
      </Routes>

      {/* <Pratcies/> */}
    </div>
  );
}

export default App;
