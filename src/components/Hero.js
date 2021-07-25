
import React from "react";



const Hero = () => {
  
  return (
    <>
      <section className="hero-section d-flex justify-content-center container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-column ">
            <h1 className="text-center text-white">WE ARE CREATIVES</h1>

            <svg
              className="align-self-center"
              width="36"
              height="114"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="#FFF"
                stroke-width="6"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 3v100M3 95.484l15 15 15-15" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
