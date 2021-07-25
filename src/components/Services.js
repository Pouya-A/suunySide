import React from "react";
import imageOne from "../images/desktop/image-graphic-design.jpg";
import imageOneSecEdition from "../images/mobile/image-graphic-design.jpg";
import imageTwo from "../images/desktop/image-photography.jpg";
import imageTwoSecEdition from "../images/mobile/image-photography.jpg";
import useWindowDimensions from "./windowSize";

const Services = () => {
  const { height, width } = useWindowDimensions();
  console.log(width);

  return (
    <section className="services container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 position-relative services-content">
          <img
            src={width >= 768 ? imageOne : imageOneSecEdition}
            alt=""
            className="img-responsive center-block w-100"
          />
          <div className="pic-info position-absolute text-center">
            <h2>Graphic Design</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              iure? Consequuntur, quas ab cum quae blanditiis sit.
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 position-relative services-content">
          <img
            src={width >= 768 ? imageTwo : imageTwoSecEdition}
            alt=""
            className="img-responsive center-block w-100 "
          />
          <div className="pic-info position-absolute text-center">
            <h2>Photography</h2>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis esse neque, quia iusto laudantium, dolorum amet soluta
              recusandae quas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
