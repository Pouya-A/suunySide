import React, { useContext } from "react";
import { SiteContext } from "../Data/context";

const About = () => {
  const { data } = useContext(SiteContext);

  return (
    <section className="about container-fluid">
      <div className="row">
        {data.map((i) => {
          if (i.id % 2) {
            return (
              <div className="d-lg-flex d-md-flex flex-lg-row col_rev">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center col-left">
                  <div className="about-info">
                    <h3>{i.title}</h3>
                    <p className="lead">{i.desc}</p>

                    <div className="info-learn">
                      <a href="#" className="top-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img
                    src={i.image}
                    alt=""
                    className="img-responsive center-block center-block w-100 h-100"
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div className=" d-lg-flex d-md-flex">
                <div className="col-lg-6  col-md-6 col-sm-12">
                  <img
                    src={i.image}
                    alt=""
                    className="img-responsive center-block w-100 h-100"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center col-left">
                  <div className="about-info">
                    <h3>{i.title}</h3>
                    <p className="lead">{i.desc}</p>

                    <div className="info-learn second">
                      <a href="#" className="top-link">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default About;
