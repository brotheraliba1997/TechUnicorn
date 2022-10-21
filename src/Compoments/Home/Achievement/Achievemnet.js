import React from 'react'
import companyText from '../../../image/companyText.png'
import Company from "../../../image/Company.png";
import Acompany from "../../../image/Acompany.png";
import textLogo from "../../../image/text-logo.png";


export default function Achievemnet() {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center p-5">
              <p className="heading ">Our Achievement</p>
            </div>

            <div className="d-flex    justify-content-between align-items-center logo-Section">
              <div>
                <img src={companyText} />
              </div>
              <div>
                <img src={Company} />
              </div>
              <div>
                <img src={Acompany} />
              </div>
              <div>
                <img src={textLogo} />
              </div>
              <div>
                <img src={companyText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
