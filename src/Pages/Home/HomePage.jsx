import "./HomePage.css";
import FirstOfferImg from "../../img/offer-image1.jpg";
import SecondOfferImg from "../../img/offer-image2.png";
import FashionImg from "../../img/fashion.jpg";
import SportsImg from "../../img/sports.jpg";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { CategoryCard } from "../../Components/CategoryComponents/Category";
import { isMobile } from "react-device-detect";
import NavBar from "../../Components/NavBar/NavBar";

const items = [
  {
    imgurl: FirstOfferImg,
    altText: "Slide 1",
    src: 1,
  },
  {
    imgurl: SecondOfferImg,
    altText: "Slide 2",
    src: 2,
  },
  {
    imgurl: FirstOfferImg,
    altText: "Slide 3",
    src: 3,
  },
  {
    imgurl: SecondOfferImg,
    altText: "Slide 4",
    src: 4,
  },
  {
    imgurl: FirstOfferImg,
    altText: "Slide 5",
    src: 5,
  },
];

const categories = [
  {
    imgurl: FashionImg,
    category: "Fashion",
    key: 1,
  },
  {
    imgurl: SportsImg,
    category: "Sports",
    key: 2,
  },
  {
    imgurl: FashionImg,
    category: "Fashion",
    key: 3,
  },
  {
    imgurl: SportsImg,
    category: "Sports",
    key: 4,
  },
  {
    imgurl: FashionImg,
    category: "Fashion",
    key: 5,
  },
  // {
  //   imgurl: SportsImg,
  //   category: "Sports",
  //   key: 6,
  // },
  // {
  //   imgurl: FashionImg,
  //   category: "Fashion",
  //   key: 7,
  // },
  // {
  //   imgurl: SportsImg,
  //   category: "Sports",
  //   key: 8,
  // },
  // {
  //   imgurl: FashionImg,
  //   category: "Fashion",
  //   key: 9,
  // },
];

const groupOffers = (items) => {
  let groupedItems = [];
  for (let i = 0; i < items.length - (items.length % 2); i = i + 2) {
    groupedItems.push({ src: items[i].src, data: [items[i], items[i + 1]] });
  }

  if (items.length % 2) {
    groupedItems.push({
      src: items.length,
      data: [
        items[items.length - 1],
        { ...items[items.length - 1], src: items.length + 1 },
      ],
    });
  }
  return groupedItems;
};

export default function HomePage() {
  const [groupedItems, setGroupedItems] = useState({
    isMobile: false,
    data: [],
  });

  useEffect(() => {
    if (isMobile)
      setGroupedItems({
        isMobile: true,
        data: items,
      });
    else
      setGroupedItems({
        isMobile: false,
        data: groupOffers(items),
      });
  }, []);

  return (
    <>
      <NavBar />
      <CarouselComponent items={groupedItems} />
      <div className="category-head">
        <div className="col-8 col-sm-4 col-md-6 categories-head">
          <h5 className="mt-2 discover-heading">Discover By categories</h5>
        </div>
        <div className="col-4 col-sm-8 col-md-6 view-btn">
          <CustomButton classNames={"btn-success btn-register btn-sm"}>
            View All
          </CustomButton>
        </div>
      </div>
      <div className="category">
        {categories.map(({ imgurl, category, key }) => (
          <CategoryCard category={category} imgUrl={imgurl} key={key} />
        ))}
      </div>
    </>
  );
}
