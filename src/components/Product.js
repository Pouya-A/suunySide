import React from "react";
import imgOne from "../images/desktop/image-gallery-sugarcubes.jpg";
import imgTwo from "../images/desktop/image-gallery-cone.jpg";
import imgThree from "../images/desktop/image-gallery-milkbottles.jpg";
import imgFour from "../images/desktop/image-gallery-orange.jpg";

const Product = () => {
  return (
    <section className="product container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          <img
            src={imgOne}
            className="img-responsive center-block w-100 h-100"
            alt=""
          />
        </div>
        <div className="col-lg-3 col-6">
          <img
            src={imgTwo}
            className="img-responsive center-block w-100 h-100"
            alt=""
          />
        </div>
        <div className="col-lg-3 col-6">
          <img
            src={imgThree}
            className="img-responsive center-block w-100 h-100"
            alt=""
          />
        </div>
        <div className="col-lg-3 col-6">
          <img
            src={imgFour}
            className="img-responsive center-block w-100 h-100"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
