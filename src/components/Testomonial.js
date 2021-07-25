import React, { useContext } from "react";
import img1 from "../images/image-emily.jpg";
import { SiteContext } from "../Data/context";

const Testomonial = () => {
  const { testomonialInfo } = useContext(SiteContext);
  console.log(testomonialInfo);
  return (
    <section className="testomonial container-fluid">
      <div className="row d-flex">
        <div className="testomonial-header">
          <h2 className="text-center">Testomonials</h2>
        </div>
        {testomonialInfo.map((testo) => {
          return (
            <div className="testomonial-info col-lg-4 col-md-12">
              <div className="testomonial-info-img">
                <img src={testo.image} alt="" />
              </div>

              <div className="testomonial-info-content text-center">
                <p>{testo.quote}.</p>

                <h3>{testo.name}</h3>
                <h4>{testo.job}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testomonial;
