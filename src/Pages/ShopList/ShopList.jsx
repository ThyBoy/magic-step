import ShopComponent from "../../Components/ShopComponent/ShopComponent";
import { CategoryPill } from "../../Components/CategoryComponents/Category";
import { requestServerAddress } from "../../env";
import "./ShopList.css";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../redux/ui/ui.selector";
import { fetchCategoriesThunk, showAlertThunk } from "../../redux/ui/ui.utils";
import { showLoading, hideLoading } from "../../redux/ui/ui.actions";
import axios from "axios";

// const shops = [
//   {
//     name: "LifeStyle Fashion",
//     location: "CP, New Delhi",
//     rating: 4.1,
//     ratingsCount: 17,
//     logoImgUrl: ShopLogo,
//     coverImgUrl: Coverpic,
//     products: 56,
//     visits: 500,
//     sale: 50,
//     key: 1,
//   },
// ];

export default function ShopList() {
  const params = useParams();
  const [shops, setShops] = useState([]);
  const [requested, setRequested] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const fetchShopsData = useCallback(async () => {
    dispatch(showLoading());
    if (params?.category) {
      dispatch(showLoading());
      try {
        console.log("Called ", params.category);
        const response = await axios.post(
          requestServerAddress + "profile/filterBySellerCategory",
          {
            category: params.category,
          }
        );
        setShops(response.data);
      } catch (error) {
        if (error?.response.data?.msg) {
          dispatch(showAlertThunk(error.response.data.msg));
        } else if (error?.response.data?.error) {
          dispatch(showAlertThunk(error.response.data.error));
        } else {
          dispatch(showAlertThunk("Can't get categories!!"));
        }
        console.log(error);
      }
    }
    dispatch(hideLoading());
  }, [params, dispatch]);

  useEffect(() => {
    if (!params?.category && !requested) {
      setRequested(true);
      dispatch(fetchCategoriesThunk());
    }
  }, [dispatch, requested, params]);

  useEffect(() => {
    if (params?.category) {
      fetchShopsData();
    }
  }, [params, fetchShopsData]);

  return (
    <>
      <NavBar />
      {!params?.category ? (
        <div className="category-list">
          {categories
            .slice(0, 8)
            .map(({ category_name, category_image }, index) => (
              <CategoryPill
                category={category_name}
                imgUrl={requestServerAddress + category_image}
                categoryUrl={"/shops/" + category_name}
                key={index}
              />
            ))}
        </div>
      ) : null}
      <div className="shop-list">
        {shops.length ? (
          shops.map((item, index) => <ShopComponent key={index} data={item} />)
        ) : (
          <h2 style={{ fontWeight: "600" }}>No Shops Found!</h2>
        )}
      </div>
    </>
  );
}
