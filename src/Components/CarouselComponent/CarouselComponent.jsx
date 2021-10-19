import "./CarouselComponent.css";
import Carousel from "react-bootstrap/Carousel";

const MobileSlides = (items) =>
  items.map((item) => {
    return (
      <Carousel.Item className="carousel-item" key={item.src}>
        <div className="carousel-div">
          <img className="carousel-img" src={item.imgurl} alt={item.altText} />
        </div>
      </Carousel.Item>
    );
  });

const NormalSlides = (items) =>
  items.map((item) => {
    return (
      <Carousel.Item className="carousel-item" key={item.src}>
        <div className="normal-carousel">
          <div className="normal-carousel-div">
            <img
              className="carousel-img"
              src={item.data[0].imgurl}
              alt={item.data[0].altText}
            />
          </div>
          <div className="normal-carousel-div">
            <img
              className="carousel-img"
              src={item.data[1].imgurl}
              alt={item.data[1].altText}
            />
          </div>
        </div>
      </Carousel.Item>
    );
  });

export default function CarouselComponent({ items }) {
  return (
    <Carousel className="carousel-head" interval={3000}>
      {items.isMobile ? MobileSlides(items.data) : NormalSlides(items.data)}
    </Carousel>
  );
}
