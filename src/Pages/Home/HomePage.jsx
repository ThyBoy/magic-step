import "./HomePage.css";
import FirstOfferImg from "../../img/offer-image1.jpg";
import SecondOfferImg from "../../img/offer-image2.png";
import FashionImg from "../../img/fashion.jpg";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { CategoryCard } from "../../Components/CategoryComponents/Category";
import { isMobile } from "react-device-detect";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import { requestServerAddress } from "../../env";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/user/user.selectors";

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

  const [viewAll, setViewAll] = useState(false);
  const [categories, setCategories] = useState([]);
  const token = useSelector(selectToken);
  console.log("home");

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

  useEffect(() => {
    async function fetchCategories() {
      console.log("categories requested");
      const response = await axios.get(
        requestServerAddress + "profile/getSellersCategory",
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setCategories([
        ...response.data.map((val) => val[0].toUpperCase() + val.slice(1)),
      ]);
    }
    if (!categories.length) {
      fetchCategories();
    }
  }, [categories, token]);

  return (
    <>
      <NavBar />
      <CarouselComponent items={groupedItems} />
      <div className="category-head">
        <div className="col-8 col-sm-4 col-md-6 categories-head">
          <h5 className="mt-2 discover-heading">Discover By categories</h5>
        </div>
        <div className="col-4 col-sm-8 col-md-6 view-btn">
          <CustomButton
            classNames={"btn-success btn-register btn-sm"}
            onClick={() => setViewAll(true)}
          >
            View All
          </CustomButton>
        </div>
      </div>
      <div className="category">
        {categories.slice(0, 5).map((category, index) => (
          <CategoryCard category={category} imgUrl={FashionImg} key={index} />
        ))}
        {viewAll
          ? categories
              .slice(5, categories.length)
              .map((category, index) => (
                <CategoryCard
                  category={category}
                  imgUrl={FashionImg}
                  key={index + 5}
                />
              ))
          : null}
      </div>
    </>
  );
}
