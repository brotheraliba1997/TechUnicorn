import React from 'react'
import trafic from '../../../image/trafic.png'
import call from '../../../image/call.png'



 function Header() {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center ">
          <p className="header-heading ">export default</p>
          <div className="d-flex align-items-center gap-3 img-size">
            <img src={trafic} />
            <p className="m-0">Call Center</p>
            <img src={call} />
            <p className="m-0"> Shipping & Returns</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
