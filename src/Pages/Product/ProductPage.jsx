import "./ProductPage.css";
import JeansImage from "../../img/Jeans.jpg";
import HeadponeImage from "../../img/headphone.jpeg";
import Headpone2Image from "../../img/headphone1.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CustomButton from "../../Components/CustomButton/CustomButton";
import ImageRenderer from "../../Components/ImageRenderer/ImageRenderer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faStar,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Badge, ToggleButton } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";

function GetStars(props) {
  return (
    <h6>
      {[...Array(props.count).keys()].map((value, idx) => (
        <FontAwesomeIcon key={idx} icon={faStar} color="#28a745" />
      ))}
    </h6>
  );
}

function ReviewComponent(props) {
  return (
    <div>
      <h5 className="review-head">
        <Badge
          bg="success"
          style={{ fontWeight: "600", fontSize: "large", marginRight: "20px" }}
        >
          4 <FontAwesomeIcon icon={faStar} color="white" />
        </Badge>
        Very Nice
      </h5>
      <h6>Good Quality as described</h6>
      <div className="review-img">
        <img src={JeansImage} alt="review-img" className="img-review" />
        <img src={JeansImage} alt="review-img" className="img-review" />
        <img src={JeansImage} alt="review-img" className="img-review" />
      </div>
      <h6 className="review-foot">
        Gaurav Sharma, Delhi <span className="span-tab"></span> 12 months ago
      </h6>
    </div>
  );
}

export default function ProductPage() {
  const items = [
    {
      original: HeadponeImage,
      thumbnail: HeadponeImage,
    },
    {
      original: Headpone2Image,
      thumbnail: Headpone2Image,
    },
    {
      original: HeadponeImage,
      thumbnail: HeadponeImage,
    },
    {
      original: Headpone2Image,
      thumbnail: Headpone2Image,
    },
    {
      original: JeansImage,
      thumbnail: JeansImage,
    },
    {
      original: Headpone2Image,
      thumbnail: Headpone2Image,
    },
    {
      original: HeadponeImage,
      thumbnail: HeadponeImage,
    },
  ];

  const variants = ["Red", "Blue", "Orange", "Black"];

  const [fullScreen, setFullScreen] = useState(false);
  const [variantValue, setVariantValue] = useState("");

  function imageHandler(props) {
    return <ImageRenderer {...props} fullScreen={fullScreen} />;
  }

  const galleryProperties = {
    thumbnailPosition: "left",
    useBrowserFullscreen: false,
    showPlayButton: false,
    autoPlay: true,
    slideDuration: 450,
    slideInterval: 4000,
    renderItem: imageHandler,
    onScreenChange: (bool) => setFullScreen(bool),
  };

  return (
    <>
      <NavBar />
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
          <h5>
            <Badge
              bg="success"
              style={{
                fontWeight: "600",
                fontSize: "large",
                marginRight: "20px",
                marginTop: "20px",
              }}
            >
              <FontAwesomeIcon icon={faStar} color="white" /> 4.9
            </Badge>
            (35 ratings)
          </h5>
          <h5 className="variants-head">Variants</h5>
          {variants.map((variant, idx) => (
            <ToggleButton
              className="variant-btn"
              key={idx}
              id={`radio-variant-${idx}`}
              type="radio"
              variant="outline-success"
              name="radio"
              value={variant}
              checked={variantValue === variant}
              onChange={(event) => setVariantValue(event.target.value)}
            >
              {variant}
            </ToggleButton>
          ))}
          <h5 className="variants-head" style={{ paddingTop: "25px" }}>
            Product Info
          </h5>
          <h5 className="product-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            assumenda a cupiditate optio, dolores voluptates tempora sit
            voluptatem eaque ipsum cumque iure eligendi quas vitae deserunt
            nemo! Non, unde beatae.
          </h5>
          <div className="product-details">
            <Accordion flush>
              <Accordion.Item eventKey="0" className="details-item">
                <Accordion.Button className="details-item-btn">
                  <div className="right-pad-more">
                    <FontAwesomeIcon icon={faShoppingBag} color="#495057" />
                  </div>
                  Product Details
                </Accordion.Button>
                <Accordion.Body className="details-item-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt quasi necessitatibus corporis. Repellendus beatae
                  consectetur autem deserunt nobis veniam tempora, libero, odit
                  quasi obcaecati necessitatibus excepturi corporis, ad
                  blanditiis maiores?
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="details-item">
                <Accordion.Button className="details-item-btn">
                  <div className="right-pad-more">
                    <FontAwesomeIcon icon={faUndoAlt} color="#495057" />
                  </div>
                  10 Days Return Policy
                </Accordion.Button>
                <Accordion.Body className="details-item-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  obcaecati distinctio blanditiis? Molestias velit autem porro
                  et aut facilis? Velit iusto repellat vero unde, impedit
                  facilis id commodi et veritatis?
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="details-item">
                <Accordion.Button className="details-item-btn">
                  <div className="right-pad-more">
                    <FontAwesomeIcon icon={faShoppingBag} color="#495057" />
                  </div>
                  Shipping Information
                </Accordion.Button>
                <Accordion.Body className="details-item-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odio, ex. Adipisci placeat amet a doloribus repellendus cumque
                  deserunt. Porro repellendus quam maiores ipsam pariatur iure
                  qui dolore aliquid libero nemo?
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <h5 className="variants-head" style={{ paddingTop: "15px" }}>
            Reviews
          </h5>
          <div className="product-rating">
            <h5>
              4.9 <span className="text-secondary">/5</span>
            </h5>
            <GetStars count={5} />
          </div>
          <br />
          <ReviewComponent />
        </div>
      </div>
    </>
  );
}
