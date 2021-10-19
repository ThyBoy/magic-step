import "./ProductPage.css";
import JeansImage from "../../img/Jeans.jpg";
import HeadponeImage from "../../img/headphone.jpeg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CustomButton from "../../Components/CustomButton/CustomButton";
import ImageRenderer from "../../Components/ImageRenderer/ImageRenderer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductPage() {
  const items = [
    {
      original: HeadponeImage,
      thumbnail: HeadponeImage,
    },
    {
      original: HeadponeImage,
      thumbnail: HeadponeImage,
    },
    {
      original: JeansImage,
      thumbnail: JeansImage,
    },
    {
      original: JeansImage,
      thumbnail: JeansImage,
    },
    {
      original: JeansImage,
      thumbnail: JeansImage,
    },
    {
      original: JeansImage,
      thumbnail: JeansImage,
    },
    {
      original: HeadponeImage,
      thumbnail: HeadponeImage,
    },
  ];

  const variants = ["Red", "Blue", "Orange", "Black"];

  const [fullScreen, setFullScreen] = useState(false);

  function imageHandler(props) {
    return <ImageRenderer {...props} fullScreen={fullScreen} />;
  }

  function handleFullScreen(bool) {
    setFullScreen(bool);
  }

  const galleryProperties = {
    thumbnailPosition: "left",
    useBrowserFullscreen: false,
    showPlayButton: false,
    autoPlay: true,
    slideDuration: 450,
    slideInterval: 4000,
    renderItem: imageHandler,
    onScreenChange: handleFullScreen,
  };

  return (
    <div className="row" style={{ width: "97%", margin: "3%" }}>
      <div className="col-md-7 img-glry">
        <div className="product-img">
          <ImageGallery items={items} {...galleryProperties} />
        </div>
        <CustomButton classNames={"btn-outline-success btn-login btn-long"}>
          Add to Cart
        </CustomButton>
      </div>
      <div className="col-md-5">
        <h2 className="product-name">Light Blue T-shirt</h2>
        <h4>
          <span className="product-price">$199</span>
          <span className="text-strike">249</span>
        </h4>
        <h5 className="product-rating">
          <FontAwesomeIcon icon={faStar} color="#2ECC71" /> 4.9 (35 ratings)
        </h5>
        <h5 className="variants-head">Variants</h5>
        <div className="row mob-display-none">
          <div className="col-sm-3 mb-3">
            <button className="extra-all-same">Red</button>
            <button className="ml-4 pl-1 extra-all-same-active">Blue</button>
            <button className="ml-4 pl-1 extra-all-same">Orange</button>
            <button className="ml-4 extra-all-same">Black</button>
          </div>
        </div>
        <h5 className="font-weight-bold">Product info</h5>
        <h5 className="w-75 mt-2 product-info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          commodi dicta sit eos, nulla aliquam, inventore hic ipsam ipsa
          doloribus optio sequi accusamus, at expedita.
        </h5>

        <hr className="mt-4 mb-4"></hr>

        <div className="d-flex justify-content-between">
          <h5 className="font-weight mb-2">
            <a
              className="extra-toggle-collapse"
              data-toggle="collapse"
              href="#collapse2"
            >
              <i className="fas fa-shopping-bag text-secondary pr-3"></i>Product
              Details{" "}
            </a>
          </h5>
          <a
            className="extra-toggle-collapse"
            data-toggle="collapse"
            href="#collapse2"
          >
            <i className="fas fa-chevron-down align-right"></i>
          </a>
        </div>
        <div id="collapse2" className="collapse">
          <p>Loreum ipsum Loreum hshs shvhhsu hsvysx </p>
        </div>

        <hr className="mt-4 mb-4"></hr>

        <div className="d-flex justify-content-between">
          <h5 className="font-weight">
            {" "}
            <a
              className="extra-toggle-collapse"
              data-toggle="collapse"
              href="#collapse1"
            >
              <i className="fas fa-undo-alt text-secondary pr-3"></i>10 Days
              Return Policy
            </a>
          </h5>
          <a
            className="extra-toggle-collapse"
            data-toggle="collapse"
            href="#collapse1"
          >
            <i className="fas fa-chevron-down align-right"></i>
          </a>
        </div>
        <div id="collapse1" className="panel-collapse collapse">
          <p>Loreum ipsum Loreum hshs shvhhsu hsvysx </p>
        </div>

        <hr className="mt-4 mb-4"></hr>

        <div className="d-flex justify-content-between">
          <h5 className="font-weight">
            <a
              className="extra-toggle-collapse"
              data-toggle="collapse"
              href="#collapse3"
            >
              <i className="fas fa-truck text-secondary pr-3 "></i>Shipping
              Information
            </a>
          </h5>
          <a
            className="extra-toggle-collapse"
            data-toggle="collapse"
            href="#collapse3"
          >
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
        <div id="collapse3" className="panel-collapse collapse">
          <p>Loreum ipsum Loreum hshs shvhhsu hsvysx </p>
        </div>

        <hr className="mt-4 mb-4"></hr>

        <h5 className="font-weight">Reviews</h5>

        <div className="d-flex justify-content-between">
          <h4 className="font-weight-bold">
            4.9 <span className="text-secondary">/5</span>
          </h4>

          <h6>
            <i className="fas fa-star text-success"></i>
            <i className="fas fa-star text-success"></i>
            <i className="fas fa-star text-success"></i>
            <i className="fas fa-star text-success"></i>
            <i className="fas fa-star text-success"></i>
          </h6>
        </div>
        <br />
        <div className="extra-desk-review">
          <h5 className="pt-1 pb-2">
            <i className="fas fa-star text-success"></i> 4.5
          </h5>
          <h5>
            <span className="font-weight-bold">Very Nice</span>
            <br />
            Good quality as described
          </h5>
          <div className="row">
            <div className="col-5 ">
              <img
                className="pb-2 extra-img-mob-adjust"
                src="img/Rectangle 7.jpg"
                alt=""
              />
            </div>
            <div className="col-5">
              <img
                className="pb-2 extra-img-mob-adjust"
                src="img/Rectangle 7.jpg"
                alt=""
              />
            </div>
          </div>
          <img className="pb-2" src="img/Rectangle 7.jpg" alt="" />
          <img className="pt-2" src="img/Rectangle 7.jpg" alt="" />
          <h5 className="pt-2">
            Gaurav Sharma, Delhi <br />
            Feb, 2020
          </h5>
          <hr />
        </div>
      </div>
    </div>
  );
}
