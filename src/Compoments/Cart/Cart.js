import React from 'react'
import Collection from '../Home/Collection/Collection'
import Footer from '../Home/Footer/Footer'
import GoodSeller from '../Home/GoodSeller/GoodSeller'
import Header from '../Home/Header/Header'
import Letters from '../Home/Letters/Letters'
import NavbarSection from '../Home/Navbar/NavbarSection'
import TopItem from '../Home/TopItems/TopItem'
import Mycarts from './Mycarts/Mycarts'

export default function Cart() {
  return (
    <div>
      <Header />
      <NavbarSection />
      <Collection />
      <Mycarts/>
      <div className="m-120">
        <TopItem />
      </div>

      <GoodSeller />
      <Letters />
      <div className="m-80">
        <Footer />
      </div>
    </div>
  );
}
