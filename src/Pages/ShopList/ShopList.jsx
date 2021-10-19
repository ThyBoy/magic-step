import ShopLogo from "../../img/ShopLogo.jpg";
import Coverpic from "../../img/coverpic.jpg";
import FashionIcon from "../../img/fashionIcon.svg";
import SportsIcon from "../../img/sportsIcon.svg";
import GroceryIcon from "../../img/groceryIcon.png";
import ShopComponent from "../../Components/ShopComponent/ShopComponent";
import { CategoryPill } from "../../Components/CategoryComponents/Category";

import "./ShopList.css";
import NavBar from "../../Components/NavBar/NavBar";

const shops = [
  {
    name: "LifeStyle Fashion",
    location: "CP, New Delhi",
    rating: 4.1,
    ratingsCount: 17,
    logoImgUrl: ShopLogo,
    coverImgUrl: Coverpic,
    products: 56,
    visits: 500,
    sale: 50,
    key: 1,
  },
  {
    name: "LifeStyle Fashion",
    location: "CP, New Delhi",
    rating: 4.2,
    ratingsCount: 27,
    logoImgUrl: ShopLogo,
    coverImgUrl: Coverpic,
    products: 156,
    visits: 660,
    sale: 89,
    key: 2,
  },
  {
    name: "LifeStyle Fashion",
    location: "CP, New Delhi",
    rating: 4.3,
    ratingsCount: 37,
    logoImgUrl: ShopLogo,
    coverImgUrl: Coverpic,
    products: 256,
    visits: 620,
    sale: 150,
    key: 3,
  },
  {
    name: "LifeStyle Fashion",
    location: "CP, New Delhi",
    rating: 4.4,
    ratingsCount: 47,
    logoImgUrl: ShopLogo,
    coverImgUrl: Coverpic,
    products: 356,
    visits: 780,
    sale: 99,
    key: 4,
  },
  {
    name: "LifeStyle Fashion",
    location: "CP, New Delhi",
    rating: 4.5,
    ratingsCount: 107,
    logoImgUrl: ShopLogo,
    coverImgUrl: Coverpic,
    products: 506,
    visits: 590,
    sale: 350,
    key: 5,
  },
  {
    name: "LifeStyle Fashion",
    location: "CP, New Delhi",
    rating: 4.6,
    ratingsCount: 127,
    logoImgUrl: ShopLogo,
    coverImgUrl: Coverpic,
    products: 516,
    visits: 760,
    sale: 90,
    key: 6,
  },
  {
    name: "LifeStyle Fashion",
    location: "CP, New Delhi",
    rating: 4.7,
    ratingsCount: 197,
    logoImgUrl: ShopLogo,
    coverImgUrl: Coverpic,
    products: 36,
    visits: 990,
    sale: 770,
    key: 7,
  },
  {
    name: "LifeStyle Fashion",
    location: "CP, New Delhi",
    rating: 4.8,
    ratingsCount: 17,
    logoImgUrl: ShopLogo,
    coverImgUrl: Coverpic,
    products: 156,
    visits: 510,
    sale: 10,
    key: 8,
  },
];

const category = [
  { name: "Fashion", imageUrl: FashionIcon, key: 1 },
  { name: "Sports", imageUrl: SportsIcon, key: 2 },
  { name: "Grocery", imageUrl: GroceryIcon, key: 3 },
];

export default function ShopList() {
  return (
    <>
      <NavBar />
      <div className="category-list">
        {category.map((item) => (
          <CategoryPill
            key={item.key}
            category={item.name}
            imgUrl={item.imageUrl}
          />
        ))}
      </div>
      <div className="shop-list">
        {shops.map((item) => (
          <ShopComponent key={item.key} data={item} />
        ))}
      </div>
    </>
  );
}
