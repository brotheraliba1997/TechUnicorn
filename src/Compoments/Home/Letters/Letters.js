import React from 'react'
import arrowfull from '../../../image/arrowfull.png'

export default function Letters() {
  return (
    <div>
      <div className="bg-white py-3  ">
        <div className="d-flex my-5 flex-column justify-content-center align-items-center ">
          <p className="heading">Join Our News Letters</p>
          <p className="paraghp text-center">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. <br></br> Iterative approaches to corporate
            strategy foster
          </p>

          <div className="input-design d-flex gap-2 px-2 align-items-center  ">
            <input
              type="text"
              placeholder="Insert your mail here"
              style={{
                border: "none",
                width: "100%",
                padding: "5px",
                background: "none",
              }}
            />
            <button className="button-design">
              <img src={arrowfull} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
