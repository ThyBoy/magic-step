import "./HomePage.css";
import FirstOfferImg from "../../img/offer-image1.jpg";
import SecondOfferImg from "../../img/offer-image2.png";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { CategoryCard } from "../../Components/CategoryComponents/Category";
import { isMobile } from "react-device-detect";
import NavBar from "../../Components/NavBar/NavBar";
import { requestServerAddress } from "../../env";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesThunk } from "../../redux/ui/ui.utils";
import { selectCategories } from "../../redux/ui/ui.selector";

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
  const [requested, setRequested] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    console.log('Called groupitems')
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
    if (!requested) {
      setRequested(true);
      dispatch(fetchCategoriesThunk());
    }
  }, [dispatch, requested]);

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
        {categories
          .slice(0, 5)
          .map(({ category_name, category_image }, index) => (
            <CategoryCard
              category={category_name}
              imgUrl={requestServerAddress + category_image}
              categoryUrl={"/shops/" + category_name}
              key={index}
            />
          ))}
        {viewAll
          ? categories
              .slice(5, categories.length)
              .map(({ category_name, category_image }, index) => (
                <CategoryCard
                  category={category_name}
                  imgUrl={requestServerAddress + category_image}
                  categoryUrl={"/shops/" + category_name}
                  key={index + 5}
                />
              ))
          : null}
      </div>
    </>
  );
}
