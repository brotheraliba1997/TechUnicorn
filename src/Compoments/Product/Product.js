import React from 'react'
import ProductDetail from './ProductDetails/ProductDetail'
import './product.css'
import Reviews from './Review/Reviews'
import Counpones from '../Cart/Coupones/Counpones'
import TopItem from '../Home/TopItems/TopItem'
import Footer from '../Home/Footer/Footer'
import Header from '../Home/Header/Header'
import NavbarSection from '../Home/Navbar/NavbarSection'
import Collection from '../Home/Collection/Collection'

export default function Product() {
  return (
    <div>
      <Header />
      <NavbarSection />
      
      <ProductDetail />

      <Reviews />
      <TopItem />
      <div className="m-100">
        <Footer />
      </div>
    </div>
  );
}
