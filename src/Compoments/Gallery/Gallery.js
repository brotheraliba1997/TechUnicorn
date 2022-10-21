import React from 'react'
import Collection from '../Home/Collection/Collection'
import Footer from '../Home/Footer/Footer'
import GoodSeller from '../Home/GoodSeller/GoodSeller'
import Header from '../Home/Header/Header'
import Letters from '../Home/Letters/Letters'
import NavbarSection from '../Home/Navbar/NavbarSection'
import PrimiumCollection from '../Home/primiumCollection/PrimiumCollection'

export default function Gallery() {
  return (
    <div>
      <Header />
      <NavbarSection />
      <Collection />
      <div className="m-100">
        <PrimiumCollection />
      </div>

      <div className="m-100">
        <GoodSeller />
      </div>
      <Letters />
      <div className="m-100">
        <Footer />
      </div>
    </div>
  );
}
