import { useHistory } from "react-router-dom";
import "./Category.css";

export function CategoryCard({ category, imgUrl, categoryUrl }) {
  const history = useHistory();
  return (
    <div
      className="cardbody category-card"
      onClick={() => {
        history.push(categoryUrl);
      }}
    >
      <div
        className="img-fluid p-2 category-img"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <p className="category-name">{category}</p>
    </div>
  );
}

export function CategoryPill({ category, imgUrl, categoryUrl }) {
  const history = useHistory();
  return (
    <div
      className="cardbody category-pill"
      onClick={() => {
        history.push(categoryUrl);
      }}
    >
      <img className="category-icon" src={imgUrl} alt={category} />
      <p
        className="category-name"
        style={{ paddingLeft: "10px", paddingTop: "15px" }}
      >
        {category}
      </p>
    </div>
  );
}
